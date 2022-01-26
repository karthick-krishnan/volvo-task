'use-strict';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const bunyan = __importStar(require("bunyan"));
const httpContext = __importStar(require("express-http-context"));
const bunyanLog = bunyan.createLogger({
    name: "customer-management"
});
class Logger {
    constructor() {
        this.logger = bunyanLog;
    }
    info(path, method, layer, msg, data = null) {
        this.logger.info(JSON.stringify({
            filePath: path,
            reqTrackingId: httpContext.get('reqId'),
            method: method,
            layer: layer,
            msg: msg,
            data: data || null
        }));
    }
    error(path, method, layer, msg, error = null) {
        this.logger.error(JSON.stringify({
            filePath: path,
            reqTrackingId: httpContext.get('reqId'),
            method: method,
            layer: layer,
            msg: msg,
            error: error || null
        }));
    }
    warn(path, method, layer, msg, error = null) {
        this.logger.warn(JSON.stringify({
            filePath: path,
            reqTrackingId: httpContext.get('reqId'),
            method: method,
            layer: layer,
            msg: msg,
            error: error || null
        }));
    }
    fatal(path, method, layer, msg, error = null) {
        this.logger.warn(JSON.stringify({
            filePath: path,
            reqTrackingId: httpContext.get('reqId'),
            method: method,
            layer: layer,
            msg: msg,
            error: error || null
        }));
    }
}
exports.Log = new Logger();
//# sourceMappingURL=logger.js.map