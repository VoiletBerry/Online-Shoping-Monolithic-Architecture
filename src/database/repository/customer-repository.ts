import { CustomerSignup } from "../../dto/cutomer-dto";
import { APIError, STATUS_CODES } from "../../utils/app-errors";
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

      if (!customer) return false;

      return customer;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Create Customer");
    }
  }

  async Login() {}
}
