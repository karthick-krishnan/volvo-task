import {
    CustomerEmailOrPhoneDoesnNotExist,
    NotFoundError
  } from "../../utils/error-handler";
  import CustomerOperations from "../../dao/operations/customer";
  import { Customer } from "../../../src/dao/models/customer";
import Logger from "../../utils/logger";
  
  class CustomerHandlers {
    public async checkCustomerId(customerId: string) {
      try {  
        const customer: Customer | null =
          await CustomerOperations.getCustomerByCustomerId(customerId);
  
        if (!customer) {

          Logger.error("Customer is not found!!!!");
  
          throw NotFoundError("Customer does not exist!!!");

        } else if (customer && (!customer.emailId || !customer.phone)) {
            
          Logger.error("Customer is not found!!!!");
  
          throw CustomerEmailOrPhoneDoesnNotExist(
            "Customer doesnot have email or phone number!!!"
          );
        } else {
          return customer;
        }
      } catch (ex) {
        Logger.error(
          "Exception while checking checkCustomerId!!!",
          ex
        );
        throw ex;
      }
    }
  }
  
  export default new CustomerHandlers();
  