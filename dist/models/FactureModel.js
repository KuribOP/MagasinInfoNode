"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facture = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Facture extends sequelize_1.Model {
}
exports.Facture = Facture;
Facture.init({
    id_fac: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date_fac: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    date_paye: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    id_commande: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the command number'
            }
        }
        /*
        references:{
            model:Adresse,
            key:'id',
        }
        */
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
