import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class Brand extends Model {}

Brand.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: "Unnamed",
		},
		image: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		underscored: true, // Brug underscores istedet for standarden CamelCase
	}
);

export default Brand;
