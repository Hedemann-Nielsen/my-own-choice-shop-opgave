import Product from "../models/product.model.js";
import Brand from "../models/brand.model.js";
import Categorie from "../models/category.model.js";
import Rating from "../models/rating.model.js";

Product.belongsTo(Brand);
Product.belongsTo(Categorie);
Product.belongsTo(Rating);
Product.belongsToMany(Rating, { through: "product_rating_relations" });

class ProductController {
	constructor() {}
	// Retrieve a list of records
	listAll = async (req, res) => {
		const result = await Product.findAll({
			order: ["name"],
		});
		return result;
	};

	// Get a list of details on a particular record
	getOne = async (id) => {
		const result = await Product.findByPk(id, {
			include: [
				{
					model: Brand,
					attributes: ["id", "name"],
				},
				{
					model: Categorie,
					attributes: ["id", "title"],
				},
				{
					model: Rating,
					attributes: ["id", "stars", "comment"],
				},
			],
		});
		return result;
	};

	// Create a record
	create = async (data) => {
		const result = await Product.create(data);
		return result;
	};

	// Update a record
	update = async (data) => {
		const result = await Product.update(data, { where: { id: data.id } });
		return result;
	};

	// Deletes a record
	delete = async (id) => {
		const result = await Product.destroy({ where: { id: id } });
		return result;
	};
}

export default ProductController;
