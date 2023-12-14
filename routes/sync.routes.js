import express from "express";
import { sequelize } from "../config/db.config.js";

//Modeller der skal oprettes når /init kører fra Postman
import Brand from "../models/brand.model.js";
import Category from "../models/category.model.js";
import Gender from "../models/Gender.model.js";
import Products from "../models/product.model.js";
import Rating from "../models/rating.model.js";
import user from "../models/user.model.js";
// import reviews from "../models/reviews.model.js";

const router = express.Router();

router.get("/sync", async (req, res) => {
	try {
		await sequelize.sync({ force: true });
		res.json({
			message: "syncronaised successfully",
		});
	} catch (error) {
		res.send(error.message);
	}
});

export { router as SyncRouter };
