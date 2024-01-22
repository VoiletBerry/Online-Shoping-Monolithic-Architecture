import { CustomerRepository } from "../database/repository/customer-repository";

// All Buisness Logic

export class CustomerService {
  private repository: CustomerRepository;

  constructor() {
    this.repository = new CustomerRepository();
  }

  async SignUp(payload: { name: string; password: string }) {
    try {
      this.repository.CreateCustomer();
    } catch (error) {
      console.log(error);
    }
  }
}
