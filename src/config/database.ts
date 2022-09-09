import { Sequelize } from "sequelize";
import { DBNAME, DBUSER, DBPASS } from './constants';


export const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    host: 'localhost',
    dialect: 'mysql'
});