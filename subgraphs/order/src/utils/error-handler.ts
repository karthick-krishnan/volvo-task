import { ApolloError, UserInputError } from 'apollo-server-errors';
import constants  from './constants'

const InternalServerError = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.INTERNAL_ERR.toString());
}

const NotFoundError = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.NOT_FOUND.toString());
}

const CustomerEmailOrPhoneDoesnNotExist = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.NOT_FOUND.toString());
}

const BadRequest = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.BAD_REQUEST.toString());
}

const ProductIsNotInStock = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.NOT_FOUND.toString());
}

const ProductQuantityShouldBeLess = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.BAD_REQUEST.toString());
}

const NonExistentOrder = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.NOT_FOUND.toString());
}


export {
    InternalServerError,
    NotFoundError,
    BadRequest,
    CustomerEmailOrPhoneDoesnNotExist,
    ProductIsNotInStock,
    NonExistentOrder,
    ProductQuantityShouldBeLess
}