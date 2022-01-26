"use strict";
/**
 * Application-wide error handler class
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
const lodash_1 = __importDefault(require("lodash"));
const error_codes_1 = require("./error-codes");
const logger_1 = require("../logger");
const constants_1 = __importDefault(require("../constants"));
class BaseError {
    constructor() {
        this._errorCodes = error_codes_1.Errors;
    }
    set error(error) {
        this._error = error;
        ;
    }
    get error() {
        return this._error;
    }
    get errorCodes() {
        return this._errorCodes;
    }
    createError(error, errorOverride) {
        let detailsArray = [];
        if (errorOverride) {
            if (errorOverride.details && !(errorOverride.details instanceof Array)) {
                detailsArray = [errorOverride.details.message];
            }
            else {
                detailsArray = errorOverride.details;
            }
        }
        const errorObject = lodash_1.default.mergeWith({}, error, errorOverride, (o, s) => lodash_1.default.isNull(s) ? o : s);
        errorObject.details = detailsArray;
        this._error = errorObject;
        logger_1.Log.info(__filename, 'createError', constants_1.default.APPLICATION.LAYERS.APP, `severity: ${errorObject.severity}, message: ${errorObject.message}`);
        return this.formatError();
    }
    formatError() {
        return {
            httpCode: this._error.httpCode,
            businessCode: this._error.businessCode,
            message: this._error.message,
            details: this._error.details
        };
    }
    ;
}
exports.BaseError = BaseError;
exports.default = new BaseError();
//# sourceMappingURL=base-error.js.map