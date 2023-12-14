import Rating from "../models/rating.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

Rating.belongsTo(User);
Rating.hasOne(Product);

class RatingController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Rating.findAll();
		return result;
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Rating.findByPk(id, {
			include: {
				model: Product,
				attributes: ["id", "name", "description"],
			},
		});
		return result;
	};

	// Create a record
	create = async (data) => {
		const result = await Rating.create(data);
		return result;
	};

	// Update a record
	update = async (data) => {
		const result = await Rating.update(data, { where: { id: data.id } });
		return result;
	};

	// Deletes a record
	delete = async (id) => {
		const result = await Rating.destroy({ where: { id: id } });
		return result;
	};
}

export default RatingController;
