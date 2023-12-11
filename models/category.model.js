import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class Categories extends Model {}

Categories.init(
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
		modelName: "Categories",
		underscored: true, // Brug underscores istedet for standarden CamelCase
		freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
	}
);

export default Categories;
