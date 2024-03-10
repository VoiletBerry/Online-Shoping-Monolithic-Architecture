import { CustomerRepository } from "../database/repository/customer-repository";
import { CustomerLogin, CustomerSignup } from "../dto/cutomer-dto";
import { APIError } from "../utils/app-errors";
import { GeneratePassword, GenerateSalt } from "../utils/encrypt-data";

// All Buisness Logic

export class CustomerService {
  private repository: CustomerRepository;

  constructor() {
    this.repository = new CustomerRepository();
  }

  async SignUp(payload: CustomerSignup): Promise<any> {
    try {
      const { password } = payload;

      const salt = await GenerateSalt();
      const hashedPassword = await GeneratePassword(password, salt);

      const customer = await this.repository.CreateCustomer({ ...payload, password: hashedPassword, salt });

      if (!customer) throw new Error("Customer Not Created");

      return customer;
    } catch (error: any) {
      throw new APIError("Data Not found", error);
    }
  }

  async SignIn(payload: CustomerLogin): Promise<any> {
    try {
      const { email, password } = payload;

      

    } catch (error: any) {
      throw new APIError("Data Not found", error);
    }
  }
}
