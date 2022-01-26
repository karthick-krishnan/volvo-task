export default {
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
}
