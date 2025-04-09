// Routes for handling product-related API requests
// This file is registered with the /api/products prefix in server.js
// So all routes here are relative to /api/products

import express from "express";

const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController.js";

//similar to router.get but we can stick more methods after
//e.g., router.route('/).get(getProducts).put(updateProduct)
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);


export default router;