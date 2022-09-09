import { Model, DataTypes, BelongsTo } from "sequelize";
import { sequelize } from "../config/database";
import { Adresse } from "./AdresseModel";
import { Facture } from "./FactureModel";


export class Client extends Model {
    public id_adresse!: number;
    public adresse!: string;
    public comple_adresse!: string;
    public ville!: string;
    public cp!: string;
    public mail!: string;
    public telephone!: string;
}

Client.init({
    id_client: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    nom: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the name of the client'
            }
        }
    },
    entreprise: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
    },
    prenom: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    id_adresse: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter the adress'
            }
        },
        references: {
            model: Adresse,
            key: 'id_adresse',
        }
    },
},
    {
        sequelize,
        timestamps: false,
    });

Adresse.hasOne(Client, { foreignKey: "id_adresse" });
Client.belongsTo(Adresse, { foreignKey: "id_adresse" })