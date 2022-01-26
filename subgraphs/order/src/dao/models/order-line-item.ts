
'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index"
import dbConstants from '../../utils/db-constants'
import { Customer } from "./customer";
import { Order } from "./order";
import { Product } from "./product";

class OrderLineItem extends Model {
  public orderLineItemId!: string;
  public orderId: string;
  public customerId: string;
  public prodId: string;
}

OrderLineItem.init({
    OrderLineItemId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      customerId: {
        allowNull: true,
        type: DataTypes.UUID
      },
      orderId: {
        allowNull: true,
        type: DataTypes.UUID
      },
      prodId:{
        allowNull: true,
        type: DataTypes.UUID
      }
}, {
    sequelize,
    tableName: dbConstants.DB.TABLE_NAMES.ORDER_LINE_ITEM,
    timestamps: false
  });

  OrderLineItem.belongsTo(Customer, {foreignKey: 'customerId'});
  OrderLineItem.belongsTo(Product, {foreignKey: 'prodId'});
  OrderLineItem.belongsTo(Order, {foreignKey: 'orderId'});

export { OrderLineItem };