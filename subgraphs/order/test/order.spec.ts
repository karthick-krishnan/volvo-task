import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { typeDefs } from '../src/app';
import { mockResolver, customerId, productId, noExistingOrderId } from "./mock";

const getOrderQuery = `query Order($orderId: ID!) {
  order(orderId: $orderId) {
    products {
      name
      price
    },
    customer {
      name,
      phone
      emailId
    }
    deliveryDate
    orderId
    totalPrice
  }
}
`

const createOrderMutation = `mutation Order($customerId: ID, $deliveryDate: String, $products: [ID], $qty: Int) {
  order(customerId: $customerId, deliveryDate: $deliveryDate, products: $products, qty: $qty) {
    customer {
      name
      emailId
    }
    products {
      name
      price
    }
    orderId
    totalPrice
  }
}
`
const noExistingCustomerId = "cd43965a-7ed2-11ec-90d6-0242ac120003";
let server: ApolloServer;

beforeAll(() => {
  console.log('Started')
  server = new ApolloServer({
    schema: buildFederatedSchema({ typeDefs, resolvers: mockResolver }),
  });
});

afterAll((done) => {
  server.stop();
  done();
});

describe("Order subgraph", () => {
  it("Gets the order", async () => {
    const res = await server.executeOperation({ query: getOrderQuery, variables: {orderId: "69005202-4dcf-4169-86f4-69a8e0aeb6ff"} });
    expect(res).toMatchSnapshot();
  });

  it("Gets the correct product details", async () => {
    const res = await server.executeOperation({ query: getOrderQuery, variables: {orderId: "69005202-4dcf-4169-86f4-69a8e0aeb6ff"} });
    expect(res?.data?.order?.totalPrice).toBe(25);
    expect(res?.data?.order?.products?.length).toBe(2);
    expect(res?.data?.order?.products[0]?.name).toBe("Type C Cable");
    expect(res?.data?.order?.products[1]?.name).toBe("Type C Charger");
  });

  it('Gets the correct customer details', async () => {
    const res = await server.executeOperation({ query: getOrderQuery, variables: {orderId: "69005202-4dcf-4169-86f4-69a8e0aeb6ff"} });
    expect(res?.data?.order?.customer?.emailId).toBe("karthick.taker@gmail.com");
    expect(res?.data?.order?.customer?.name).toBe("Karthick");
  })
  
  it("order does not exisit", async () => {
    const res: any = await server.executeOperation({ query: getOrderQuery, variables: {orderId: noExistingOrderId} });
    expect(res?.errors[0]?.message).toBe("orderId does not exist!!!!");
    expect(res?.data?.order).toBe(null);
  })

  it("Create a new order", async () => {
    const res = await server.executeOperation({ query: createOrderMutation, variables: {customerId , deliveryDate: "2022-02-18", products: [productId], qty: 1} });
    expect(res).toMatchSnapshot();
  });

  it("Create order throws out of stock error", async () => {
    const res: any = await server.executeOperation({ query: createOrderMutation, variables: {customerId , deliveryDate: "2022-02-18", products: [productId], qty: 26} });
    expect(res?.errors[0]?.message).toBe("product quantity quoted should be less!!!")
  });
});
