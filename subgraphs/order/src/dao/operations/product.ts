import { InternalServerError } from "../../utils/error-handler";
import { Product } from "../models/product";
import Logger from '../../utils/logger'
import {Op} from 'sequelize'

class ProductOperations {

public async getProductByProductId(productId: any) {
    try {
        return await Product.findAll({
            where : {
                prodId : productId,
                qty: {
                    [Op.gte] :  1
                }
            }
        })
    } catch (ex) {
        Logger.error('Exception while adding an order Line Item!!!', ex);
        throw InternalServerError('Exception found in queries');
    }
}

  public async updateProduct(product: any, qty: number) {
    try {
      return await Product.decrement("qty", {
        by: qty,
        where: { prodId:product.prodId },
      });
    } catch (ex) {
        Logger.error('Exception while adding an order Line Item!!!', ex);
        throw InternalServerError(ex);
    }
  }
}

export default new ProductOperations();
