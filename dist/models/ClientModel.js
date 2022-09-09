"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const AdresseModel_1 = require("./AdresseModel");
class Client extends sequelize_1.Model {
}
exports.Client = Client;
Client.init({
    id_client: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the name of the client'
            }
        }
    },
    entreprise: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
        unique: false,
    },
    prenom: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    id_adresse: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the adress'
            }
        },
        references: {
            model: AdresseModel_1.Adresse,
            key: 'id_adresse',
        }
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
AdresseModel_1.Adresse.hasOne(Client, { foreignKey: "id_adresse" });
Client.belongsTo(AdresseModel_1.Adresse, { foreignKey: "id_adresse" });
