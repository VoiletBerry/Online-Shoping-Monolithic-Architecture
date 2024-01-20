import express from "express";
import dotenv from "dotenv";
import { connect } from "./database/db-connection";
import { expressApp } from "./express-app";

dotenv.config();

async function startServer() {
  const PORT = process.env.PORT || 3000;

  const app = express();

  await connect();

  await expressApp(app);

  app
    .listen(PORT, () => {
      console.clear();
      console.log(`listening at port ${PORT}`);
    })
    .on("error", (error) => {
      console.log(error);
      process.exit();
    });
}

startServer();
