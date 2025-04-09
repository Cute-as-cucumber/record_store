// Routes for handling product-related API requests
// This file is registered with the /api/products prefix in server.js
// So all routes here are relative to /api/products

import express from "express";
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
const router = express.Router();

//registering the rule: if someone goes to / respond with blah blah
//get all products
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({}); 
    res.json(products);
}));

//create a route for a single product
router.get('/:id', asyncHandler(async (req, res) => {
    //shortcut for Product.findOne({ _id: someId }), we are finding by id
    const product = await Product.findById(req.params.id);
    
    if (product) {
        return res.json(product);
    } else {
        //without this server send 200 ok with null
        res.status(404);
        //use ErrorHandler
        //we don't need to bring Errorhandler again because we already did that in server.js
        // which is the central entry point
        throw new Error('Resource not found');
    }
}));


export default router;