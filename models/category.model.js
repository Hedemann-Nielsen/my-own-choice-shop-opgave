import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class Categorie extends Model {}

export default Categorie.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "Unnamed",
		},
	},
	{
		sequelize,
		underscored: true, // Brug underscores istedet for standarden CamelCase
		freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
	}
);
