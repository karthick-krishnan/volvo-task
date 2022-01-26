import { inputValidation } from "../validators/index";
import { getOrderByIdSchema } from "../validators/order-schema";
import Logger from "../../utils/logger";
import OrderHandlers from "../handlers/order";

export const orderQueries: any = (orderhandler: any = OrderHandlers) => ({
  order: async (_: any, args: any) => {
    try {
      inputValidation(args, getOrderByIdSchema);
      return await orderhandler.getOrderItem(args.orderId);
    } catch (ex) {
      Logger.error("Exception found in Order Queries", JSON.stringify(ex));
      throw ex;
    }
  },
});

export default orderQueries();
