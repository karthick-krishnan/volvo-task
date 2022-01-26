import { inputValidation } from "../validators/index";
import { addOrderSchema } from "../validators/order-schema";
import OrderHandlers from "../handlers/order";

export const orderMutations: any = (orderhandler: any = OrderHandlers) => ({
  order: async (_: any, args: any) => {
    try {
      inputValidation(args, addOrderSchema);

      const orderResult = await orderhandler.createOrder(args);

      return orderResult;
    } catch (ex) {
      console.error("Exception found in Mutation", JSON.stringify(ex));
      throw ex;
    }
  },
});

export default orderMutations();
