import { sequelize } from "../config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";
import Gender from "./Gender.model.js";

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
				isStrongPassword: {
					args: [
						{
							minLength: 8,
							minLowercase: 1,
							minUppercase: 1,
							minNumbers: 1,
						},
					],
					msg: "Password must be at least 8 characters long, contain at least 1 lowercase letter, 1 uppercase letter, and 1 number.",
				},
			},
		},
		gender_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
