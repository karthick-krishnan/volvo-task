
import Logger from '../../utils/logger'
import {InternalServerError} from '../../utils/error-handler'
import {Customer} from '../models/customer'


class CustomerOperations {

    public async getCustomerByCustomerId(customerId: string) : Promise<Customer | null>{
        try {
            return await Customer.findOne({
                where: {
                    customerId: customerId
                }
            });
        } catch (ex) {
            Logger.error('Exception while adding getting order with order Id', JSON.stringify(ex));
            throw InternalServerError('Exception found in queries');
        }
    }
}


export default new CustomerOperations();