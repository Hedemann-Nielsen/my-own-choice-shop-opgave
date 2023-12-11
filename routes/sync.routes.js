import express from "express";
import { sequelize } from "../config/db.config.js";

//Modeller der skal oprettes når /init kører fra Postman
import Products from "../models/product.model.js";
import Category from "../models/category.model.js";

const router = express.Router();

router.get("/sync", async (req, res) => {
	try {
		await sequelize.sync();
		res.json({
			message: "syncronaised successfully",
		});
	} catch (error) {
		res.send(error);
	}
});

export { router as SyncRouter };
