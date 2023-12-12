import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import Categories from "./category.model.js";
import Products from "./product.model.js";

// Deklarerer Class Category som udvider SQ's model klasse
class CategoryProductRel extends Model {}

// Definerer modellens felter og generelle options
export default CategoryProductRel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Categories,
				key: "id",
			},
		},
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Products,
				key: "id",
			},
		},
	},
	{
		sequelize,
		underscored: true,
		modelName: "category_product_rel",
		freezeTableName: true,
		timestamps: false,
	}
);
