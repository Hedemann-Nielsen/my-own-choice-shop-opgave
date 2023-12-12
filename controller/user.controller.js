import User from "../models/user.model.js";

export default class UserController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await User.findAll({
			order: ["firstname"],
		});
		res.json(result);
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await User.findByPk(id, {
			where: { id: req.params.id },
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
		const result = await User.destroy(id, { where: { id: data.id } });
		return result;
	};
}
