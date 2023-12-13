import User from "../models/user.model.js";
import Gender from "../models/Gender.model.js";
// import Reviews from "../models/reviews.model.js";

User.belongsTo(Gender);
// User.hasMany(Reviews);

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
		const result = await User.findByPk(id);
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
