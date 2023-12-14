import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import Brand from "../models/brand.model.js";
import Categorie from "../models/category.model.js";
import Rating from "../models/rating.model.js";

class Product extends Model {}

export default Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: "Unnamed",
		},
		image: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.TEXT,
			defaultValue: "No description",
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
		categorie_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Categorie,
				key: "id",
			},
		},
		rating_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Rating,
				key: "id",
			},
		},
	},
	{
		sequelize,
		underscored: true, // Brug underscores istedet for standarden CamelCase
	}
);
