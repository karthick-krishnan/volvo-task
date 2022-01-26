"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    APPLICATION: {
        NAME: 'customer-management',
        LAYERS: {
            APP: 'app',
            API: 'api',
            DATA: 'data',
            SERVICE: 'service',
            UTILS: 'utils',
            TRANSACTION: 'transaction'
        },
        CHACHING_END_POINTS: {
            CUSTOMERS: '/customers',
            CUSTOMER: '/customer'
        },
        // Database fields and fields in request body
        FIELDS: {
            COUNTRY_CODE: 'countryCd',
            DATA: 'data',
            ERROR: 'error',
        },
        // Query and path params in request
        PARAMS: {
            SORT_BY: 'sortBy',
            ORDER: 'order',
            FILTER_BY: 'filterBy',
            VALUE: 'value',
            SEARCH: 'search',
            LIMIT: 'limit',
            OFFSET: 'offset',
            COUNTRY_CODE: 'countryCode',
            TOTAL_COUNT: 'totalCount',
            ASC: 'asc',
            DESC: 'desc',
            CUSTOMER_ID: 'customerId',
            LOT_ID: 'lotId',
            PRODUCT_ID: "productId",
            APPLICABLE_PRODUCT_ID: "applicableProductId"
        },
        COUNTRY_CODES: ['us', 'uk'],
        COUNTRY_NAMES: { "uk": "United Kingdom", "us": "United States" },
        DATE_FORMAT: 'MM-DD-YYYY',
        DATE_TIME_FORMAT: 'MM-DD-YYYY HH:MM:SS',
        FILE_IMPORT_MAX_SIZE: (25 * 1024 * 1024),
        FILE_MIMETYPES: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    },
    HTTP_CODES: {
        OK: 200,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        INTERNAL_ERR: 500,
        FORBIDDEN: 403,
        UNPROCESSABLE: 422,
        CONFLICT: 409,
        NO_CONTENT: 204,
    },
    DB: {
        TABLE_NAMES: {
            CUSTOMERS: "Customers",
            CUSTOMER_TYPE: "CustomerType",
            PAYMENT_TYPE: "PaymentType",
            INVOICE_FREQUENCY: "InvoiceFrequency",
            CUSTOMER_CONTACT_TYPE: "CustomerContactType",
            CUSTOMER_CONTACT: "CustomerContact",
            TOKEN_APPLICABILITY_OPTION: "TokenApplicabilityOption",
            CUSTOMER_TOKEN_APPLICABILITY_TYPE: "CustomerTokenApplicabilityType",
            CUSTOMER_DOCUMENT: "CustomerDocument"
        }
    }
};
//# sourceMappingURL=constants.js.map