import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import Gender from "./gender.model.js";

class User extends Model {}

export default User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: "A password must be provided",
				},
				notEmpty: {
					msg: "Please enter a password",
				},
				not: {
					args: /^[a-z]+$/i,
					msg: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
				},
			},
		},

		gender_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Gender,
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "User",
		underscored: true, // Brug underscores istedet for standarden CamelCase
	}
);
