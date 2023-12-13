import Products from "../models/product.model.js";
import Brand from "../models/brand.model.js";
import Categories from "../models/category.model.js";
import CategoryProductRel from "../models/category_product_rel.model.js";
// import Reviews from "../models/reviews.model.js";

Products.belongsTo(Brand);
// Products.hasMany(Reviews);

Products.belongsToMany(Categories, { through: CategoryProductRel });
Categories.belongsToMany(Products, { through: CategoryProductRel });

class ProductController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Products.findAll({
			order: ["name"],
		});
		return result;
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Products.findByPk(id, {
			include: [
				{
					model: Brand,
				},
				{
					model: Categories,
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
		const result = await Products.destroy({ where: { id: id } });
		return result;
	};
}

export default ProductController;
