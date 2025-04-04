import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();

//access the PORT var from .env file
const port = process.env.PORT;


const app = express();

//registering the rule: if someone goes to / respond with blah blah
app.get('/api/products', (req, res) => { 
    res.json(products);
});

//create a route for a single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});


// starts the server and makes it “listen” for requests on port 5001.
app.listen(port, () => console.log(`Server running on port ${port}`))
