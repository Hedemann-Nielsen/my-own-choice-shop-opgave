import express from "express";
import ProductController from "../controller/product.controller.js";
const controller = new ProductController();
const router = express.Router();

//henter alle
router.get("/product", async (req, res) => {
	const result = await controller.listAll();
	res.json(result);
});

//henter detaljer
router.get("/product/:id([0-9]*)", async (req, res) => {
	const result = await controller.getOne(req.params.id);
	res.json(result);
});

//opret
router.post("/product", async (req, res) => {
	try {
		const result = await controller.create(req.body);
		res.send({
			message: "Created successfully",
			newId: result.id,
		});
	} catch (error) {
		res.send(error.message);
	}
});

//opdater
router.put("/product", async (req, res) => {
	try {
		await controller.update(req.body);
		res.send({
			message: "Updated successfully",
		});
	} catch (error) {
		res.send(error.message);
	}
});

//sletter
router.delete("/product/:id([0-9]*)", async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send({
			message: "Deleted successfully",
		});
	} catch (error) {
		res.send(error.message);
	}
});
export { router as ProductsRouter };
