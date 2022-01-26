// import '@types/jest'
import { OrderHandlers } from '../src/services/handlers/order';
import { orderQueries } from '../src/services/queries/order';
import { orderMutations } from '../src/services/mutations/order';
import { JsxEmit } from 'typescript';

export const orderId = "607ac5b8-7a16-11ec-90d6-0242ac120003";
export const createdOrderId = "a44b434e-7a16-11ec-90d6-0242ac120003";
export const customerId = "123e4567-e89b-12d3-a456-426655440012";
export const productId = "3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8";
export const customerErrorOrderId = "cd43965a-7ed2-11ec-90d6-0242ac120003";
export const noExistingOrderId = "85f617fe-7ed3-11ec-90d6-0242ac120003";

export const mockOrder = {
  "products": [
    {
      "name": "Type C Cable",
      "prodId": "3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8",
      "price": 12
    },
    {
      "name": "Type C Charger",
      "prodId": "49230094-ad3d-466f-b8cc-33a127e4e6b5",
      "price": 13
    }
  ],
  "customer": {
    "name": "Karthick",
    "phone": "1234234",
    "emailId": "karthick.taker@gmail.com"
  },
  "deliveryDate": "1643120622000",
  "orderId": "69005202-4dcf-4169-86f4-69a8e0aeb6ff",
  "totalPrice": 25
};

export const mockCustomer = {
    "customerId": "123e4567-e89b-12d3-a456-426655440012",
    "name": "Karthick",
    "phone": "1234234",
    "emailId": "karthick.taker@gmail.com",
    "address": "houston"
}

export const mockProducts = [{
  "name": "Type C Cable",
  "prodId": "3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8",
  "price": 12,
  "qty": 25
}, {
  "name": "Type C Charger",
  "prodId": "49230094-ad3d-466f-b8cc-33a127e4e6b5",
  "price": 13,
  "qty": 18
}, {
  "name": "5000mAh Power bank",
  "prodId": "767ce862-7ed2-11ec-90d6-0242ac120003",
  "price": 18,
  "qty": 0
}]

let mockOrderLineItem = [{
  OrderLineItemId: '1976ce91-fdc6-4ac1-b1d2-05b7fd376864',
  customerId: '123e4567-e89b-12d3-a456-426655440000',
  orderId: '69005202-4dcf-4169-86f4-69a8e0aeb6ff',
  prodId: '3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8',
  Order: mockOrder,
  Product: mockProducts[0],
  Customer: mockCustomer
}, {
  OrderLineItemId: '1976ce91-fdc6-4ac1-b1d2-05b7fd376864',
  customerId: '123e4567-e89b-12d3-a456-426655440000',
  orderId: '69005202-4dcf-4169-86f4-69a8e0aeb6ff',
  prodId: '3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8',
  Order: mockOrder,
  Product: mockProducts[1],
  Customer: mockCustomer
}]

export const mockOrderOperation = {
  addOrder: jest.fn(() => Promise.resolve(mockOrder)),
  addOrderLineItem: jest.fn(() => Promise.resolve({})),
  getOrderLineItemByorderId: jest.fn((x: any) => Promise.resolve(orderLineItemResolver(x)))
}

const orderLineItemResolver = (id: any) => {
  switch (id) {
    case orderId:
      return mockOrderLineItem;
    case noExistingOrderId:
      return []
    default:
      return mockOrderLineItem
  }
}

export const mockProductOperation = {
  getProductByProductId: jest.fn(() => Promise.resolve([mockProducts[0]])),
  updateProduct: jest.fn(() => Promise.resolve(mockProducts[0]))
}

export const mockCustomerHandler = {
  checkCustomerId: jest.fn(() => Promise.resolve(mockCustomer))
}

export const mockOrderHandlers = new OrderHandlers(mockCustomerHandler, mockOrderOperation, mockProductOperation)

export const mockResolver = { 
  Query : orderQueries(mockOrderHandlers),
  Mutation : orderMutations(mockOrderHandlers)
}