import Category from "../models/category.model.js";

class CategoryController {
	constructor() {}
	//hent alle produkter
	listAll = async (req, res) => {
		const result = await Category.findAll({
			order: ["name"],
		});
		res.json(result);
	};

	//hent produkt detaljer
	getOne = async (id) => {
		const result = await Category.findByPk(id)({
			where: { id: req.params.id },
		});
		res.json(...result);
	};

	// opret nyt produkt
	create = async (data) => {
		const result = await Category.create(data);
		return result;
	};

	//Opdater et produkt
	update = async (data) => {
		const result = await Category.update(data, { where: { id: data.id } });
		return result;
	};

	//slet et produkt
	delete = async (id) => {
		const result = await Category.destroy({ where: { id: data.id } });
		return result;
	};
}

export default CategoryController;
