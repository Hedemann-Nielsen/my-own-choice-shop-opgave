import Gender from "../models/gender.model.js";
import User from "../models/user.model.js";

Gender.belongsTo(User);
Gender.belongsToMany(User, { through: "User_gender_relations" });

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
