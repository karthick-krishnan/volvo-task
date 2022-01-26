"use strict";
/**
 * Application-wide response handler
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("./constants"));
class ResponseHandler {
    constructor() {
        this._httpCode = constants_1.default.HTTP_CODES.OK;
        this._data = null;
        this._error = null;
    }
    sendResponse(res) {
        return res.status(this._httpCode).send({
            [constants_1.default.APPLICATION.FIELDS.DATA]: this._data,
            [constants_1.default.APPLICATION.FIELDS.ERROR]: this._error
        });
    }
    setSuccessResponse(res, data) {
        this._httpCode = constants_1.default.HTTP_CODES.OK;
        this._data = data;
        this._error = null;
        return this.sendResponse(res);
    }
    setNoContentResponse(res, data) {
        this._httpCode = constants_1.default.HTTP_CODES.NO_CONTENT;
        this._data = data;
        this._error = null;
        return this.sendResponse(res);
    }
    setErrorResponse(res, err) {
        this._httpCode = err.httpCode;
        this._data = null;
        this._error = err;
        return this.sendResponse(res);
    }
}
exports.default = new ResponseHandler();
//# sourceMappingURL=response-handler.js.map