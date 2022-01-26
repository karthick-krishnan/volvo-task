'use strict';

import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
import config from '../config/config'


interface DBObject {
  [key: string]: any
}
const db: DBObject = {};


export const sequelize: Sequelize  = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);

db.sequelize = sequelize;

export default db;