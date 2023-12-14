import express from "express";
import dotenv from "dotenv";

import { SyncRouter } from "./routes/sync.routes.js";
import { BrandRouter } from "./routes/brand.routes.js";
import { CategoryRouter } from "./routes/category.routes.js";
import { GenderRouter } from "./routes/gender.routes.js";
import { ProductRouter } from "./routes/product.routes.js";
import { UserRouter } from "./routes/user.routes.js";
import { RatingRouter } from "./routes/rating.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Udvider app i index.js så vi kan læse form body data
app.use(express.urlencoded({ extended: true }));

app.use(
	SyncRouter,
	CategoryRouter,
	RatingRouter,
	BrandRouter,
	GenderRouter,
	ProductRouter,
	UserRouter
);

app.listen(port, () => {
	console.log(`server køre med port http://localhost:${port}`);
});
