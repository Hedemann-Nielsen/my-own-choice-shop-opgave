import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

Category.belongsTo(Product);
Category.belongsToMany(Product, { through: "product_category_relations" });

class CategoryController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Category.findAll({
			order: ["title"],
		});
		return result;
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Category.findByPk(id);
		return result;
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
		const result = await Category.destroy({ where: { id: id } });
		return result;
	};
}

export default CategoryController;
