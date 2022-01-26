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
const product_1 = require("../models/product");
const base_error_1 = __importDefault(require("../../utils/error/base-error"));
class ProductOperations {
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Product', product_1.Product);
                return yield product_1.Product.create(product);
            }
            catch (ex) {
                //     Log.error(__filename, 'addProductGroup', Constants.APPLICATION.LAYERS.SERVICE, 'Error adding product group', ex);
                throw (base_error_1.default.createError(base_error_1.default.errorCodes.DATABASE_ERR.commonDBError, {
                    message: 'Error adding product group',
                    details: ex
                }));
            }
        });
    }
}
exports.default = new ProductOperations();
//# sourceMappingURL=product.js.map