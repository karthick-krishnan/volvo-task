import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema} from '@apollo/federation';
import { ProductQueries } from '../src/services/queries/product';
import { getMutation } from '../src/services/mutations/product';
import { typeDefs } from '../src/app';
import { mockProductOperations, prodId, createdProdId } from './mock';
import { createTestClient} from 'apollo-server-testing';

let server: ApolloServer;

const resolvers = {
  Query : ProductQueries(mockProductOperations),
  Mutation : getMutation(mockProductOperations)
}

const getAllProductsQuery = `query AllProductsQuery {
  allProducts {
    name
  }
}
`
const getProductsQuery = `query ProductQuery($prodId: ID!) {
  product(prodId: $prodId) {
    prodId
    name
  }
}
`
const createProductMutation = `mutation Mutation($name: String, $price: Float, $qty: Int) {
  createProduct(name: $name, price: $price, qty: $qty) {
    name
    prodId
    price
  }
}
`

const type =`
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
  }`

// export const typeDefs = gql(type);


 server = new ApolloServer(
    { schema: buildFederatedSchema({typeDefs, resolvers: resolvers }),     
  
  },
);

console.log('server', server);

beforeAll(() => {


})

afterAll((done) => {
  server.stop()
  done()
})

describe("Products subgraph", () => {
  it("Gets all the products", async () => {
    const res = await server.executeOperation({ query: getAllProductsQuery });
    expect(res).toMatchSnapshot();
  });

  it("Gets products based on the id", async () => {
    const res = await server.executeOperation({ query: getProductsQuery, variables: { prodId } });
    expect(res).toMatchSnapshot();
  });

  it("Matches the requested product id", async () => {
    const res: any = await server.executeOperation({ query: getProductsQuery, variables: { prodId } });
    expect(res.data.product.prodId).toBe(prodId);
  });

  it("Creates new product", async () => {
    const res: any = await server.executeOperation({ query: createProductMutation, variables: { name: "Ipad Pro", qty: 25, price: 999.12 } });
    expect(res).toMatchSnapshot();
  })

  it("Created product details", async () => {
    const res: any = await server.executeOperation({ query: createProductMutation, variables: { name: "Ipad Pro", qty: 25, price: 999.12 } });
    expect(res.data.createProduct.prodId).toBe(createdProdId);
    expect(res.data.createProduct.name).toBe("Ipad Pro");
    expect(res.data.createProduct.price).toBe(999.12);
  })
});
