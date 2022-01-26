import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import {OrderResolvers} from './services/resolvers/order'

const port = process.env.APOLLO_PORT || 4000;


const type = `
type Customer {
  customerId: ID!
  name: String
  emailId: String
  phone: String
  address: String
}

type Product {
  prodId: ID!
  name: String
  qty: Int
  price: Float
}


type Order @key(fields: "orderId") {
  orderId: ID!
  customer: Customer
  products: [Product]
  deliveryDate: String
  totalPrice: Float
}

extend type Query {
  order(orderId: ID!): Order
}

extend type Mutation {
  order(customerId: ID, products: [ID], deliveryDate: String, totalPrice: Float, qty: Int): Order
}`;

export const typeDefs = gql`${type}`;

const server = new ApolloServer({
  schema: buildFederatedSchema({ typeDefs, resolvers : OrderResolvers }),
});


server
  .listen({ port: port })
  .then(({ url }: { url: string }) => {
    console.log(`🚀 Order subgraph ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
