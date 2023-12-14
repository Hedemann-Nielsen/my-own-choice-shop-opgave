import User from "../models/user.model.js";
import Gender from "../models/gender.model.js";
import Rating from "../models/rating.model.js";

User.belongsTo(Gender);
User.belongsToMany(Rating, { through: "User_rating_relationships" });

export default class UserController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await User.findAll({
			order: ["firstname"],
		});
		return result;
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await User.findByPk(id, {
			include: {
				model: Gender,
				attributes: ["id", "name"],
			},
		});
		return result;
	};

	// Create a record
	create = async (data) => {
		const result = await User.create(data);
		return result;
	};

	// Update a record
	update = async (data) => {
		const result = await User.update(data, { where: { id: data.id } });
		return result;
	};

	// Deletes a record
	delete = async (id) => {
		const result = await User.destroy({ where: { id: id } });
		return result;
	};
}
