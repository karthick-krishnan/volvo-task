import { ApolloError, UserInputError } from 'apollo-server-errors';
import constants  from './constants'


const InternalServerError = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.INTERNAL_ERR.toString());
}

const NotFoundError = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.NOT_FOUND.toString());
}


const BadRequest = (message: string) => {
    throw new ApolloError(message, constants.HTTP_CODES.BAD_REQUEST.toString());
}

export {
    InternalServerError,
    NotFoundError,
    BadRequest
}