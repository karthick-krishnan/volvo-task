
'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index"
import dbConstants from '../../utils/db-constants'
import { Customer } from "./customer";

class Order extends Model {
  public orderId!: string;
  public customerId: string;
  public deliveryDate: string;
  public totalPrice: string;
}

Order.init({
    orderId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      customerId: {
        allowNull: true,
        type: DataTypes.UUID
      },
      deliveryDate: {
        allowNull: true,
        type: DataTypes.NUMBER
      },
      totalPrice: {
        allowNull: true,
        type: DataTypes.NUMBER,
      }
}, {
    sequelize,
    tableName: dbConstants.DB.TABLE_NAMES.ORDER,
    timestamps: false
  });

export { Order };