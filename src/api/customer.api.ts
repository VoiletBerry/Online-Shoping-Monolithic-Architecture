import { Application, NextFunction, Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import { UserAuth } from "./middleware/auth";
import { CustomerSignupSchema } from "../dto/cutomer-dto";

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

      console.log("Customer value in Api :", data);

      return res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  });

  app.post("/customer/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      // const { data } = await service.SignIn({ email, password });

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
