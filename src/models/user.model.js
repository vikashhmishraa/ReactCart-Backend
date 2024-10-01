import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let { Schema, model } = mongoose;

let userSchema = new Schema({
  userName: { type: String, min: [2, "invalid userName "] },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: [6, " password is short "] },
  phoneNumber: { type: Number },
});

userSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) {
    return next();
  }
  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (err) {
    console.log(err);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  

userSchema.methods.generateToken = function () {
  let user = this;
  let token = jwt.sign(
    { email: user.email, userName: user.userName },
    process.env.SECRET_KEY
  );
  return token;
};

let User = model("User", userSchema);

export default User;
