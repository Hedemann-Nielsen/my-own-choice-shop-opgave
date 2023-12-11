import express from "express";
import dotenv from "dotenv";
import { SyncRouter } from "./routes/sync.routes.js";
import { ProductsRouter } from "./routes/product.routes.js";
import { CategoryRouter } from "./routes/category.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Udvider app i index.js så vi kan læse form body data
app.use(express.urlencoded({ extended: true }));

app.use(SyncRouter, ProductsRouter, CategoryRouter);

app.listen(port, () => {
	console.log(`server køre med port http://localhost:${port}`);
});
