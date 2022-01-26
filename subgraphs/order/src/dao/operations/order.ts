import { Order } from "../models/order";
import { OrderLineItem } from "../models/order-line-item";
import Logger from "../../utils/logger";
import { InternalServerError } from "../../utils/error-handler";
import { Product } from "../models/product";
import { Customer } from "../models/customer";

class OrderOperations {
  public async addOrder(order: any): Promise<Order> {
    try {
      return await Order.create(order);
    } catch (ex) {
      Logger.error("Exception while adding an order!!!", ex);
      throw InternalServerError("Exception found in queries");
    }
  }

  public async addOrderLineItem(orderLineItem: any): Promise<OrderLineItem[]> {
    try {
      return await OrderLineItem.bulkCreate(orderLineItem);
    } catch (ex) {
      Logger.error("Exception while adding an order Line Item!!!", ex);
      throw InternalServerError(ex);
    }
  }

  public async getOrderLineItemByorderId(
    orderId: string
  ): Promise<OrderLineItem[]> {
    try {
      return await OrderLineItem.findAll({
        where: {
          orderId: orderId,
        },
        include: [
          {
            model: Order,
          },
          {
            model: Product,
          },
          {
            model: Customer,
          },
        ],
      },
      );
    } catch (ex) {
      Logger.error(
        "Exception while adding getting order with order Id",
        JSON.stringify(ex)
      );
      throw InternalServerError("Exception found in queries");
    }
  }
}

export default new OrderOperations();
