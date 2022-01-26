"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = exports.ERROR_SEVERITY = void 0;
/**
 * Application-wide error codes and messages
 */
const constants_1 = __importDefault(require("../constants"));
exports.ERROR_SEVERITY = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
};
const BUSINESS_CODES = {
    ACCESS_TOKEN_MISSING: 101,
    INTERNAL_ERR: 102,
    FORBIDDEN: 103,
    NOT_FOUND: 104,
    USERNAME_PASSWORD_MISSMATCH: 105,
    USER_NAME_VALIDATION: 106,
    DATABASE_ERR: 107,
    UNPROCESSABLE_ENTITY: 108,
    CONFLICT: 109,
    INPUT_VALIDATION: 110,
    DUPLICATE_ENTRY: 111,
    NO_DATA: 112
};
exports.Errors = {
    // Generic Errors
    GENERIC_ERR: {
        internalServerError: {
            businessCode: BUSINESS_CODES.INTERNAL_ERR,
            httpCode: constants_1.default.HTTP_CODES.INTERNAL_ERR,
            message: 'Internal server error',
            severity: exports.ERROR_SEVERITY.HIGH
        }
    },
    // Application Errors
    APPLICATION_ERR: {
        invalidAccessToken: {
            businessCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            httpCode: BUSINESS_CODES.ACCESS_TOKEN_MISSING,
            message: 'Invalid Access Token',
            severity: exports.ERROR_SEVERITY.LOW
        },
        accessTokenMissing: {
            businessCode: BUSINESS_CODES.ACCESS_TOKEN_MISSING,
            httpCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            message: 'Access Token Missing',
            severity: exports.ERROR_SEVERITY.LOW
        },
        notFound: {
            businessCode: BUSINESS_CODES.NOT_FOUND,
            httpCode: constants_1.default.HTTP_CODES.NOT_FOUND,
            message: 'Resource not found',
            severity: exports.ERROR_SEVERITY.LOW
        },
        userNameOrPasswordMissing: {
            businessCode: BUSINESS_CODES.USERNAME_PASSWORD_MISSMATCH,
            httpCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            message: 'Missing username or password',
            severity: exports.ERROR_SEVERITY.LOW
        },
        unprocessableEntity: {
            businessCode: BUSINESS_CODES.UNPROCESSABLE_ENTITY,
            httpCode: constants_1.default.HTTP_CODES.UNPROCESSABLE,
            message: 'Request cannot be processed',
            severity: exports.ERROR_SEVERITY.HIGH
        },
        resourceConflict: {
            businessCode: BUSINESS_CODES.CONFLICT,
            httpCode: constants_1.default.HTTP_CODES.CONFLICT,
            message: 'Data already exist',
            severity: exports.ERROR_SEVERITY.HIGH
        },
        duplicateDataEntry: {
            businessCode: BUSINESS_CODES.DUPLICATE_ENTRY,
            httpCode: constants_1.default.HTTP_CODES.CONFLICT,
            message: 'Data is already in use',
            severity: exports.ERROR_SEVERITY.HIGH
        },
        noData: {
            businessCode: BUSINESS_CODES.NO_DATA,
            httpCode: constants_1.default.HTTP_CODES.NO_CONTENT,
            message: 'Data not available',
            severity: exports.ERROR_SEVERITY.LOW
        }
    },
    // Validation Errors
    VALIDATION_ERR: {
        userNameValidationError: {
            businessCode: BUSINESS_CODES.USER_NAME_VALIDATION,
            httpCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            message: 'Missing username must have minimum 8 characters',
            severity: exports.ERROR_SEVERITY.LOW
        },
        inputValidationError: {
            businessCode: BUSINESS_CODES.INPUT_VALIDATION,
            httpCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            message: 'Missing input parameters',
            severity: exports.ERROR_SEVERITY.HIGH
        },
        graphqlTypeValidationError: {
            businessCode: BUSINESS_CODES.USER_NAME_VALIDATION,
            httpCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            message: 'Graphql validation occurred',
            severity: exports.ERROR_SEVERITY.LOW
        },
        validationError: {
            businessCode: BUSINESS_CODES.USER_NAME_VALIDATION,
            httpCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            message: 'Validation error',
            severity: exports.ERROR_SEVERITY.LOW
        },
        genericValidationError: {
            businessCode: BUSINESS_CODES.USER_NAME_VALIDATION,
            httpCode: constants_1.default.HTTP_CODES.BAD_REQUEST,
            message: 'Missing input paramters',
            severity: exports.ERROR_SEVERITY.LOW
        }
    },
    // Database Errors
    DATABASE_ERR: {
        commonDBError: {
            businessCode: BUSINESS_CODES.DATABASE_ERR,
            httpCode: constants_1.default.HTTP_CODES.INTERNAL_ERR,
            message: 'Error fetching/updating database',
            severity: exports.ERROR_SEVERITY.MEDIUM
        }
    },
};
//# sourceMappingURL=error-codes.js.map