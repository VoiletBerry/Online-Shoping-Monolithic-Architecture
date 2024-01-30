import { Application } from "express";
import express from "express";
import cors from "cors";
import { Customer } from "./api/customer.api";

export const expressApp = async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());

  Customer(app);

  return app;
};
