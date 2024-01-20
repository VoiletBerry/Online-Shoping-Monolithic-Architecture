import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connect = async () => {
  mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
      console.log("Connected To Database");
    })
    .catch((error: any) => {
      console.log("Database Error :", error);
    });
};
