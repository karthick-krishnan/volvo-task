import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { Customer } from "../src/models/customer";

const port = process.env.APOLLO_PORT || 4000;

const typeDefs = gql(
  `
  type Customer {
  customerId: ID!
  name: String
  emailId: String
  phone: String
  address: String
}

extend type Query {
  getAllCustomers: [Customer]
}
`
);

const resolvers = {
  Query: {
      getAllCustomers: async () => {
          return await Customer.findAll();
      }
  },
}


const server = new ApolloServer({ schema: buildFederatedSchema({ typeDefs, resolvers }) });


server
  .listen({ port: port })
  .then((type: any) => {
    console.log(`🚀 Customer subgraph ready at ${type.url}`);
  })
  .catch((err: any) => {
    console.error(err);
  });
