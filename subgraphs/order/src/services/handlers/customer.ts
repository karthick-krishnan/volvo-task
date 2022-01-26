import {
    CustomerEmailOrPhoneDoesnNotExist,
    NotFoundError
  } from "../../utils/error-handler";
  import CustomerOperations from "../../dao/operations/customer";
  import { Customer } from "../../../src/dao/models/customer";
  
  class CustomerHandlers {
    public async checkCustomerId(customerId: string) {
      try {  
        const customer: Customer | null =
          await CustomerOperations.getCustomerByCustomerId(customerId);
  
        if (!customer) {

          console.error("Customer is not found!!!!");
  
          throw NotFoundError("Customer does not exist!!!");

        } else if (customer && (!customer.emailId || !customer.phone)) {
            
          console.error("Customer is not found!!!!");
  
          throw CustomerEmailOrPhoneDoesnNotExist(
            "Customer doesnot have email or phone number!!!"
          );
        } else {
          return customer;
        }
      } catch (ex) {
        console.error(
          "Exception while checking checkCustomerId!!!",
          ex
        );
        throw ex;
      }
    }
  }
  
  export default new CustomerHandlers();
  