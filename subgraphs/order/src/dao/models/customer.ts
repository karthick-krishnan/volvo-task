
'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index"
import dbConstants from '../../utils/db-constants'

class Customer extends Model {
  public customerId!: string;
  public name: string;
  public emailId: string;
  public phone: string;
  public address: string;
}

Customer.init({
    customerId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING
      },
      emailId: {
        allowNull: true,
        type: DataTypes.STRING
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
      }
}, {
    sequelize,
    tableName: dbConstants.DB.TABLE_NAMES.CUSTOMER,
    timestamps: false
  });

export { Customer };