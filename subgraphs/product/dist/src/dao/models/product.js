'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    prodId: {
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID
    },
    qty: {
        allowNull: true,
        type: sequelize_1.DataTypes.NUMBER
    },
    price: {
        allowNull: true,
        type: sequelize_1.DataTypes.NUMBER,
    }
}, {
    sequelize: index_1.sequelize,
    tableName: 'Product',
    timestamps: false
});
//# sourceMappingURL=product.js.map