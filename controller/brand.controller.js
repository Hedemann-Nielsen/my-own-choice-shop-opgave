import Brand from "../models/brand.model.js";

class BrandController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Brand.findAll({
			order: ["name"],
		});
		res.json(result);
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Brand.findByPk(id)({
			where: { id: req.params.id },
		});
		res.json(...result);
	};

	// Create a record
	create = async (data) => {
		const result = await Brand.create(data);
		return result;
	};

	// Update a record
	update = async (data) => {
		const result = await Brand.update(data, { where: { id: data.id } });
		return result;
	};

	// Deletes a record
	delete = async (id) => {
		const result = await Brand.destroy({ where: { id: data.id } });
		return result;
	};
}

export default BrandController;
