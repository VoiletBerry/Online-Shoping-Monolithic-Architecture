import { NextFunction, Request, Response } from "express";
import { AuthPayload } from "../../utils/auth-dto";

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

export const UserAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    next();
  } catch (error) {
    console.log(error);
  }
};
