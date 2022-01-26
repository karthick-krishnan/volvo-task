'use strict';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// const fs = require('fs');
const sequelize_1 = require("sequelize");
const path = __importStar(require("path"));
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require('../../config/config.json')[env]
const config_1 = __importDefault(require("../../config/config"));
const currentConfig = config_1.default[env];
const db = {};
exports.sequelize = new sequelize_1.Sequelize({
    dialect: currentConfig.dialect,
    storage: currentConfig.storage
});
db.sequelize = exports.sequelize;
exports.default = db;
//# sourceMappingURL=index.js.map