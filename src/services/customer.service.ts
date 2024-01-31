import { CustomerRepository } from "../database/repository/customer-repository";
import { CustomerSignup } from "../dto/cutomer-dto";
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

      console.log("Customer value in Service :", customer);

      return customer;
    } catch (error: any) {
      throw new APIError("Data Not found", error);
    }
  }
}
