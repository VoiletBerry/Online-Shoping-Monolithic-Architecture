import { Application, NextFunction, Request, Response } from "express";
import { CustomerService } from "../services/customer.service";

export const Customer = (app: Application) => {
  const service = new CustomerService();

  app.post("/customer/signup", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, password } = req.body;

      const data = await service.SignUp({ name, password });

      res.json(data);
    } catch (error) {
      console.log(error);
    }
  });
};
