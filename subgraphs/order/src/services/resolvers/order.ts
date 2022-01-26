import OrderQueries from '../queries/order' 
import OrderMutations from '../mutations/order'
import { GraphQLResolverMap } from 'apollo-graphql'



export const OrderResolvers : GraphQLResolverMap<any> = { 
    Query : OrderQueries,
    Mutation : OrderMutations
}


 