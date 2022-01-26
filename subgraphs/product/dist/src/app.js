"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const product_1 = __importDefault(require("./dao/operations/product"));
const federation_1 = require("@apollo/federation");
const port = process.env.APOLLO_PORT || 4000;
// const products = [{
//     prodId: "607ac5b8-7a16-11ec-90d6-0242ac120003",
//     name: "MacBook Pro 13 inch",
//     qty: 25,
//     price: 22.8
// }, {
//     prodId: "a44b434e-7a16-11ec-90d6-0242ac120003",
//     name: "Ipad Mini",
//     qty: 85,
//     price: 22.8
// },{
//     prodId: "a8eb4494-7a16-11ec-90d6-0242ac120003",
//     name: "Mac Mini M1",
//     qty: 77,
//     price: 22.8
// }]
// }]
const type = `type Product @key(fields: "prodId") {
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
const typeDefs = (0, apollo_server_1.gql)(type);
const resolvers = {
    Query: {
        allProducts: () => {
            return [];
        },
        product: () => {
            return [];
        }
    },
    Mutation: {
        createProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log('args---->', args);
                console.log('');
                const product = yield product_1.default.addProduct({
                    prodId: args.prodId,
                    name: args.name,
                    qty: args.qty,
                    price: args.price
                });
                return product;
            }
            catch (ex) {
                throw ex;
            }
        })
    }
};
const server = new apollo_server_1.ApolloServer({ schema: (0, federation_1.buildFederatedSchema)({ typeDefs, resolvers }) });
server.listen({ port: port }).then(({ url }) => {
    console.log(`🚀 product subgraph ready at ${url}`);
}).catch(err => { console.error(err); });
//# sourceMappingURL=app.js.map