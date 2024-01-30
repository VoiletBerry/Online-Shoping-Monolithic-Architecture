import { CustomerSignup } from "../../dto/cutomer-dto";
import { Customer } from "../models/Customer.modal";

// All Database Operation

export class CustomerRepository {
  constructor() {}

  async CreateCustomer(payload: any) {
    try {
      const { name, email, password, phone, salt } = payload;

      const checkEmail = await Customer.findOne({ email });

      if (checkEmail) {
        return false;
      }

      const customer = await Customer.create({
        name,
        email,
        phone,
        salt,
        password,
      });

      return customer;
    } catch (error) {
      console.log(error);
    }
  }

  Login() {}
}
