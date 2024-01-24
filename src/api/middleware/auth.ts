import { NextFunction, Request, Response } from "express";

export const UserAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    next();
  } catch (error) {
    console.log(error);
  }
};
