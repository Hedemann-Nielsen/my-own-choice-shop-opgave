import express from "express";
import RatingController from "../controller/rating.controller.js";
const controller = new RatingController();
const router = express.Router();

// Retrieve a list of records
router.get("/ratings", async (req, res) => {
	const result = await controller.listAll();
	res.json(result);
});

// Get a list of details on a particular record
router.get("/rating/:id([0-9]*)", async (req, res) => {
	const result = await controller.getOne(req.params.id);
	res.json(result);
});

// Create a record
router.post("/rating", async (req, res) => {
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

// Update a record
router.put("/rating", async (req, res) => {
	try {
		await controller.update(req.body);
		res.send({
			message: "Updated successfully",
		});
	} catch (error) {
		res.send(error.message);
	}
});

// Deletes a record
router.delete("/rating/:id([0-9]*)", async (req, res) => {
	try {
		await controller.delete(req.params.id);
		res.send({
			message: "Record deleted successfully",
		});
	} catch (error) {
		res.send(error.message);
	}
});
export { router as RatingRouter };
