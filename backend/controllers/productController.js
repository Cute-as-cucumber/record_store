import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//@desc fetch all products
//@route GET /api/product
//@acces Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

//@desc fetch a product
//@route GET /api/product/:id
//@acces Public
const getProductById = asyncHandler(async (req, res) => {
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
});

//when exporting multiple things, we need to use named exports instead of default
export {getProductById, getProducts};