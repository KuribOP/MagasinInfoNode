import { Model, DataTypes, BelongsTo } from "sequelize";
import { sequelize } from "../config/database";
import { Client } from "./ClientModel";
import { Facture } from "./FactureModel";


export class Adresse extends Model {
    public id_adresse!: number;
    public adresse!: string;
    public comple_adresse!: string;
    public ville!: string;
    public cp!: string;
    public mail!: string;
    public telephone!: string;
}

Adresse.init({
    id_adresse: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    adresse: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the adresse'
            }
        }
    },
    comple_adresse: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    ville: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the town name'
            }
        },
    },
    cp: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the postal code'
            }
        },
    },
    mail: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the mail'
            }
        },
    },
    telephone: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the phone number'
            }
        },
    },
},
    {
        sequelize,
        timestamps: false,
    });

Adresse.hasOne(Facture, { foreignKey: "id_adresse" });