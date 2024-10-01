import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';



const connectDB = async () => {
    try {
      let connectionInstance =  await mongoose.connect( `${process.env.MONGODB_URI}`);
      console.log(
        `\n Database Connected", $  DB HOST : ${connectionInstance.connection.host}`
      );
    } catch (error) {
      console.log("--> ERROR : MONGODB Connection Error  :-", error);
      process.exit(1);
    }
  };

  export default connectDB;