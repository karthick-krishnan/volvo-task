
'use strict';
import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index"
import dbConstants from '../../utils/db-constants'

class Product extends Model {
  public prodId!: string;
  public name!: string;
  public qty!: number;
  public price!: number;
}

Product.init({
    prodId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: true,
        type: DataTypes.UUID
      },
      qty: {
        allowNull: true,
        type: DataTypes.NUMBER
      },
      price: {
        allowNull: true,
        type: DataTypes.FLOAT,
      }
}, {
    sequelize,
    tableName: dbConstants.DB.TABLE_NAMES.PRODUCTS,
    timestamps: false
  });

export { Product };