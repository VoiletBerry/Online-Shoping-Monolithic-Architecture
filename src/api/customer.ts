import { Application, NextFunction, Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import { UserAuth } from "./middleware/auth";

export const Customer = (app: Application) => {
  const service = new CustomerService();

  app.post("/customer/signup", async (req, res, next) => {
    try {
      const { email, password, phone } = req.body;
      const { data } = await service.SignUp({ email, password, phone });
      return res.json(data);
    } catch (err) {
      next(err);
    }
  });

  app.post("/customer/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // const { data } = await service.SignIn({ email, password });

      return res.json("");
    } catch (err) {
      next(err);
    }
  });

  app.post("/customer/address", UserAuth, async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  });
};
