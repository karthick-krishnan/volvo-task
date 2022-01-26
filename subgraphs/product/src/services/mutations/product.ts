import ProductOperations from "../../dao/operations/product";
import { inputValidation } from "../validators/index";
import { addProductSchema } from "../validators/product-schema";
import Logger from '../../utils/logger'

export const getMutation = (productOperations: any = ProductOperations) => {
    return { 
        createProduct: async (_ : any,args : any) => {
            try {

              inputValidation(args, addProductSchema);
    
              const product = await productOperations.addProduct({
                    name: args.name,
                    qty: args.qty,
                    price: args.price
                })

                return product

            } catch(ex){
                Logger.error('Exception found in Mutation', JSON.stringify(ex));
                throw ex;
              }
            }
        }
    }


export default getMutation()
