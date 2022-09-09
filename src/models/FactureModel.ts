import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Adresse } from "./AdresseModel";
import { Client } from "./ClientModel";


export class Facture extends Model {
    public id_fac!: number;
    public date_fac!: Date;
    public date_paye!: Date;
    public id_adresse!: number;
}

Facture.init({
    id_fac: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    date_fac: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    date_paye: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    id_commande: {
        type: DataTypes.INTEGER,
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
},
    {
        sequelize,
        timestamps: false,
    });
