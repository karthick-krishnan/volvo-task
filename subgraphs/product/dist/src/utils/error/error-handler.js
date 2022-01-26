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
exports.errorHandler = void 0;
const response_handler_1 = __importDefault(require("../response-handler"));
const logger_1 = require("../logger");
const constants_1 = __importDefault(require("../constants"));
class ErrorHandler {
    handleError(res, err) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.Log.error(__filename, 'handleError', constants_1.default.APPLICATION.LAYERS.APP, err.message, err);
            response_handler_1.default.setErrorResponse(res, err);
        });
    }
    isTrustedError(error) {
        if (error instanceof Error) {
            return false;
        }
        return true;
    }
}
exports.errorHandler = new ErrorHandler();
//# sourceMappingURL=error-handler.js.map