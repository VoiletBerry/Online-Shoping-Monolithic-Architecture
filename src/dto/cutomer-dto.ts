import Joi from "joi";

export const CustomerSignupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string().min(7).required(),
});

export const CustomerLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export interface CustomerSignup {
  name: string;
  email: string;
  password: string;
  phone: number;
}

export interface CustomerLogin {
  email: string;
  password: string;
}

export interface CustomerSignaturePayload {
  _id: string;
  email: string;
}
