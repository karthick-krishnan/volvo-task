import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { GraphQLError } from "graphql";
import { ProductResolvers } from "./services/resolvers/product";
const port = process.env.APOLLO_PORT || 4000;
const { readFileSync } = require("fs");
import LoggerPlugin from "./utils/logger-plugin";

// this can also be a glob pattern to match multiple files!

const type = `
type Product {
    prodId: ID!
    name: String
    qty: Int
    price: Float
  }
  
  extend type Query {
    allProducts: [Product]
    product(prodId: ID!): Product
  }
  
  extend type Mutation {
    createProduct(name: String, qty: Int, price: Float): Product
  }`;

export const typeDefs = gql(type);

export const server = new ApolloServer({
  schema: buildFederatedSchema({ typeDefs, resolvers: ProductResolvers }),
  plugins: [LoggerPlugin],
});

server
  .listen({ port: port })
  .then(({ url }) => {
    console.log(`🚀 product subgraph ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
