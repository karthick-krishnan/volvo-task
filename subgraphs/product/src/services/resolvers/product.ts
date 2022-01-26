import ProductQueries from '../queries/product' 
import ProductMutations from '../mutations/product'
import { GraphQLResolverMap } from 'apollo-graphql'



export const ProductResolvers : GraphQLResolverMap<any> = { 
    Query : ProductQueries,
    Mutation : ProductMutations
}


 