import ProductOperations from "../../dao/operations/product";
import { inputValidation } from "../validators/index";
import { getProductByIdSchema } from "../validators/product-schema";
import Logger from '../../utils/logger'


export const ProductQueries = (productOperations: any = ProductOperations) => {
  return  { 
      allProducts: async() => {
          return await productOperations.getAllProducts();
      },
      product: async (_ : any,args : any) => {
          try{
              inputValidation(args, getProductByIdSchema);
              const result = await productOperations.getProductById(args.prodId);
              return result
          } catch(ex){
            Logger.error('Exception found in Queries', JSON.stringify(ex));
            throw ex;
          }
      }
  }
}


export default ProductQueries();

