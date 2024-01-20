import { Application } from "express";
import express from "express";
import cors from "cors";

export const expressApp = async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());

  return app;
};
