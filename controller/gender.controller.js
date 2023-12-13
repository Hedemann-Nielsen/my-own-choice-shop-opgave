import Gender from "../models/Gender.model.js";
import User from "../models/user.model.js";

Gender.hasMany(User);

class GenderController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Gender.findAll({
			order: ["name"],
		});
		return result;
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Gender.findByPk(id);
		return result;
	};

	// Create a record
	create = async (data) => {
		const result = await Gender.create(data);
		return result;
	};

	// Update a record
	update = async (data) => {
		const result = await Gender.update(data, { where: { id: data.id } });
		return result;
	};

	// Deletes a record
	delete = async (id) => {
		const result = await Gender.destroy({ where: { id: id } });
		return result;
	};
}

export default GenderController;
