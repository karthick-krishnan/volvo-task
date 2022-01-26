import { Product } from "../models/product";
import Logger from '../../utils/logger'
import {InternalServerError} from '../../utils/error-handler'
import {Op} from "sequelize"



class ProductOperations {

    public async addProduct(product: any) : Promise<Product>{
        try {
            return await Product.create(product);
        } catch (ex) {
            Logger.error('Exception found while adding product!!!', ex);
            throw InternalServerError('Exception found in queries');
        }
    }

    public async getAllProducts() : Promise<Product[]> {
        try {
            return await Product.findAll( {
                where: {
                    qty: {
                        [Op.gte] :  1
                    }
                }
            });
        } catch (ex) {
            Logger.error('Exception found while getting all the product!!!!', ex);
            throw InternalServerError('Exception found in queries');
        }
    }

    public async getProductById(prodId: string) :  Promise<Product|null>  {
        try {
            return await Product.findOne({
                where: {
                    prodId : prodId
            }})
        } catch (ex) {
            Logger.error('Exception found while getting product by id', ex);
            throw InternalServerError('Exception found in queries');
        }
    }
}


export default new ProductOperations();