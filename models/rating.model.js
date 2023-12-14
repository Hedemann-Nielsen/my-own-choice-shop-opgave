import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

class Rating extends Model {}
Rating.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		stars: {
			type: DataTypes.ENUM("1", "2", "3", "4", "5"),
			allowNull: false,
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		product_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "Product",
				key: "id",
			},
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
		date: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW(),
			allowNull: false,
		},
	},
	{
		sequelize,
		underscored: true, // Brug underscores istedet for standarden CamelCase
		freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
	}
);

export default Rating;
