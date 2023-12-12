import Products from "../models/product.model.js";
import Brand from "../models/brand.model.js";
import Categories from "../models/category.model.js";
import CategoryProductRel from "../models/category_product_rel.model.js";

Products.belongsTo(Brand);

Products.belongsToMany(Categories, { through: CategoryProductRel });
Categories.belongsToMany(Products, { through: CategoryProductRel });

export default class ProductController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Products.findAll({
			order: ["name"],
		});
		res.json(result);
	};

	// Get a list of details on a particular record
	getone = async (id) => {
		const result = await Products.findByPk(id, {
			include: [
				{
					model: Brand,
				},
				{
					model: Category,
				},
			],
		});
		return result;
	};

	// Create a record
	create = async (data) => {
		const result = await Products.create(data);
		return result;
	};

	// Update a record
	update = async (data) => {
		const result = await Products.update(data, { where: { id: data.id } });
		return result;
	};

	// Deletes a record
	delete = async (id) => {
		const result = await Products.destroy({ where: { id: data.id } });
		return result;
	};
}
