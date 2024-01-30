import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Request } from "express";
import { AuthPayload } from "./auth-dto";

export const GenerateSalt = async () => {
  return await bcrypt.genSaltSync(10);
};

export const GeneratePassword = async (password: any, salt: any) => {
  return await bcrypt.hashSync(password, salt);
};

export const ComparePassword = async (enteredPassword: string, storedPassword: string) => {
  return await bcrypt.compareSync(enteredPassword, storedPassword);
};

export const GenerateSignature = async (payload: AuthPayload, secret: string) => {
  return await jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const VerifySignature = async (req: Request) => {
  const token = req.get("Authorization");

  console.log(token);

  if (token) {
    try {
      const payload = (await jwt.verify(token.split(" ")[1], process.env.JWT_SECRET!)) as AuthPayload;
      req.user = payload;
      return true;
    } catch (error) {
      console.log("JWT Error : ", error);
      return false;
    }
  }

  return false;
};

export const GenerateRandomPassword = () => {
  const length = 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
};

export const GenerateFiveDigitCode = () => {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
