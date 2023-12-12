import Gender from "../models/Gender.model.js";

class GenderController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Gender.findAll({
			order: ["name"],
		});
		res.json(result);
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Gender.findByPk(id)({
			where: { id: req.params.id },
		});
		res.json(...result);
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
		const result = await Gender.destroy(id, { where: { id: data.id } });
		return result;
	};
}

export default GenderController;
