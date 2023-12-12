import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import Brand from "./brand.model.js";

class Products extends Model {}

export default Products.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "Unnamed",
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DOUBLE(16, 2),
			allowNull: false,
			defaultValue: 0.0,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		brand_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Brand,
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "Products",
		underscored: true, // Brug underscores istedet for standarden CamelCase
		freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
	}
);
