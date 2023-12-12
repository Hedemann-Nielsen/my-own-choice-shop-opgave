import Category from "../models/category.model.js";
import CategoryProductRel from "../models/category_product_rel.model.js";
import Products from "../models/product.model.js";

Category.belongsToMany(Products, { through: CategoryProductRel });

class CategoryController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Category.findAll({
			order: ["name"],
		});
		res.json(result);
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Category.findByPk(id)({
			where: { id: req.params.id },
		});
		res.json(...result);
	};

	// Create a record
	create = async (data) => {
		const result = await Category.create(data);
		return result;
	};

	// Update a record
	update = async (data) => {
		const result = await Category.update(data, { where: { id: data.id } });
		return result;
	};

	// Deletes a record
	delete = async (id) => {
		const result = await Category.destroy(id, { where: { id: data.id } });
		return result;
	};
}

export default CategoryController;
