import express from "express";
import CategoryController from "../controller/category.controller.js";
const controller = new CategoryController();
const router = express.Router();

//henter alt
router.get("/category", async (req, res) => {
	const result = await controller.listAll();
	res.json(result);
});

//henter detaljer
router.get("/category/:id([0-9]*)", async (req, res) => {
	const result = await controller.getOne(req.params.id);
	res.json(result);
});

//opret
router.post("/category", async (req, res) => {
	try {
		const result = await controller.create(req.body);
		res.send({
			message: "created successfully",
			newId: result.id,
		});
	} catch (error) {
		res.send(error.message);
	}
});

//opdater
router.put("/category", async (req, res) => {
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
router.delete("/category/:id([0-9]*)", async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send({
			message: "Deleted successfully",
		});
	} catch (error) {
		res.send(error.message);
	}
});
export { router as CategoryRouter };
