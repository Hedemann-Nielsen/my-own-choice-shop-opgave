import Products from "../models/product.model.js";

class ProductController {
	constructor() {}
	//hent alle produkter
	listAll = async (req, res) => {
		const result = await Products.findAll({
			order: ["name"],
		});
		res.json(result);
	};

	//hent produkt detaljer
	getOne = async (id) => {
		const result = await Products.findByPk(id)({
			where: { id: req.params.id },
		});
		res.json(...result);
	};

	// opret nyt produkt
	create = async (data) => {
		const result = await Products.create(data);
		return result;
	};

	//Opdater et produkt
	update = async (data) => {
		const result = await Products.update(data, { where: { id: data.id } });
		return result;
	};

	//slet et produkt
	delete = async (id) => {
		const result = await Products.destroy({ where: { id: data.id } });
		return result;
	};
}

export default ProductController;
