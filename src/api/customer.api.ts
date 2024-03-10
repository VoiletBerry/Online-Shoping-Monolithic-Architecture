import { Application, NextFunction, Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import { UserAuth } from "./middleware/auth";
import { CustomerLoginSchema, CustomerSignupSchema } from "../dto/cutomer-dto";

export const Customer = (app: Application) => {
  const service = new CustomerService();

  app.post("/customer/signup", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = CustomerSignupSchema.validate(req.body, { abortEarly: false });

      if (error) {
        return res.status(400).json(error.details);
      }

      const { name, email, password, phone } = value;

      const data = await service.SignUp({ name, email, password, phone });

      return res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  });

  app.post("/customer/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error, value } = CustomerLoginSchema.validate(req.body, { abortEarly: false });

      if (error) return res.status(400).json(error.details);

      const { email, password } = value;

      const { data } = await service.SignIn({ email, password });

      return res.json("");
    } catch (err) {
      next(err);
    }
  });

  app.post("/customer/address", UserAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (err) {
      next(err);
    }
  });
};