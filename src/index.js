import dotenv from "dotenv";
import { app } from "./app.js";
import ConnectDB from "./database/database.js";

dotenv.config({
    path: "./.env",
  });

ConnectDB().then(() => {
    app.listen(process.env.PORT || 4001, () => {
      console.log(`Server is Running at http:localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("--> MONGODB CONNECTION FAILED!!!   :", err.message);
  });

//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is Running at PORT : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("--> MONGODB CONNECTION FAILED!!!   :", err);
//   });