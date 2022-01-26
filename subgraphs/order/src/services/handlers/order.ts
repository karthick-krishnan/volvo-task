import {
    ProductIsNotInStock,
    NonExistentOrder,
    ProductQuantityShouldBeLess
  } from "../../utils/error-handler";
  import { OrderImpl, OrderLineItemImpl } from "../../types/order";
  import CustomerHandlers from "../handlers/customer";
  import OrderOperations from "../../dao/operations/order";
  import ProductOperations from "../../dao/operations/product";
  import { OrderLineItem } from "../../dao/models/order-line-item";
  
  export class OrderHandlers {
    private _customerHandlers: any;
    private _orderOperations: any;
    private _productOperations: any;
  
    constructor(
      customerHandlers: any,
      orderOperations: any,
      productOperations: any
    ) {
      this._customerHandlers = customerHandlers;
      this._orderOperations = orderOperations;
      this._productOperations = productOperations;
    }
  
    public async createOrder(reqData: any): Promise<any> {
      try {
        const customer = await this._customerHandlers.checkCustomerId(reqData.customerId);
  
        // getting All The products
        const productResult = await this._productOperations.getProductByProductId(
          reqData.products
        );

        //products not in stock
        if (!productResult.length) {
          throw ProductIsNotInStock("none of the products in stock!!!!");
        } else if (reqData.products.length > productResult.length) {
          throw ProductIsNotInStock("Some of the products are not in stock!!!!!");
        }

         const quantityCheck = productResult.some((product: any) => {
                return product.qty >= reqData.qty
         });

         if(!quantityCheck){
            throw ProductQuantityShouldBeLess("product quantity quoted should be less!!!");
         }
  
        //Calculating total price
        const totalPrice = productResult.reduce(
          (a: number, b: any) => a + (b["price"] || 0),
          0
        );
  
        const order: OrderImpl = {
          customerId: reqData.customerId,
          deliveryDate: new Date(reqData.deliveryDate)
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
          totalPrice: totalPrice,
        };
  
        const orderResult = await this._orderOperations.addOrder(order);
  
        await this.addOrderLineItem({
          ...reqData,
          ...{ orderId: orderResult.orderId },
        });
  
        await this.decrementProduct(productResult, reqData.qty);
  
        return {
          customer: customer,
          deliveryDate: orderResult.deliveryDate,
          orderId: orderResult.orderId,
          products: productResult,
          totalPrice: totalPrice,
        };
      } catch (ex) {
        console.error("errror occureed in create order!!!!", ex);
        throw ex;
      }
    }
  
    public async addOrderLineItem(reqData: any): Promise<OrderLineItem[]> {
      try {
        const products = reqData.products;
  
        const orderLineItem: OrderLineItemImpl[] = [];
  
        for (const product of products) {
          orderLineItem.push({
            customerId: reqData.customerId,
            orderId: reqData.orderId,
            prodId: product,
          });
        }
  
        return await this._orderOperations.addOrderLineItem(orderLineItem);
      } catch (ex) {
        console.error("Exception in addOrderLineItem handler!!!", ex);
        throw ex;
      }
    }
  
    public async getOrderItem(orderId: string) {
      try {
        let orderLineItemResult: any =
          await this._orderOperations.getOrderLineItemByorderId(orderId);

        if(!orderLineItemResult || !orderLineItemResult.length){
            console.error('OrderId does not exist!!!!');
            throw NonExistentOrder('orderId does not exist!!!!');
        }  
  
        const products: any[] = [];
  
        const orderItem = orderLineItemResult[0];
  
        const customer: any = {
          customerId: orderItem.Customer.customerId,
          address: orderItem.Customer.address,
          emailId: orderItem.Customer.emailId,
          name: orderItem.Customer.name,
          phone: orderItem.Customer.phone,
        };
  
        for (const product of orderLineItemResult) {
          products.push(product.Product);
        }
  
        return {
          orderId: orderItem.orderId,
          customer: customer,
          products: products,
          deliveryDate: orderItem.Order.deliveryDate,
          totalPrice: orderItem.Order.totalPrice,
        };
      } catch (ex) {
        console.error("Exception in addOrderLineItem handler!!!", ex);
        throw ex;
      }
    }
  
    public async decrementProduct(productResult: any, qty: number) {
      try {
        for (const result of productResult) {
          await this._productOperations.updateProduct(result, qty);
        }
        return true;
      } catch (ex) {
        console.error("Exception in addOrderLineItem handler!!!", ex);
        throw ex;
      }
    }
  }
  
  export default new OrderHandlers(
    CustomerHandlers,
    OrderOperations,
    ProductOperations
  );
  