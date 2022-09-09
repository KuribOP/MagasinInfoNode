"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const FactureModel_1 = require("./FactureModel");
class Adresse extends sequelize_1.Model {
}
exports.Adresse = Adresse;
Adresse.init({
    id_adresse: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    adresse: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the adresse'
            }
        }
    },
    comple_adresse: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    ville: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the town name'
            }
        },
    },
    cp: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the postal code'
            }
        },
    },
    mail: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the mail'
            }
        },
    },
    telephone: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the phone number'
            }
        },
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
Adresse.hasOne(FactureModel_1.Facture, { foreignKey: "id_adresse" });
