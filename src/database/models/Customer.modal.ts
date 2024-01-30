import mongoose, { Document, Schema } from "mongoose";

interface CustomerInterface extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  salt: string;
  address: any;
  cart: [any];
  wishlist: [any];
  orders: [any];
}

const CustomerScheama = new Schema<CustomerInterface>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    salt: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
      },
    },
  }
);

export const Customer = mongoose.model<CustomerInterface>("customer", CustomerScheama);
