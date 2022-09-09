"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const constants_1 = require("./constants");
exports.sequelize = new sequelize_1.Sequelize(constants_1.DBNAME, constants_1.DBUSER, constants_1.DBPASS, {
    host: 'localhost',
    dialect: 'mysql'
});
