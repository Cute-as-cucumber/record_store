import express from 'express';

import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

connectDB();
//access the PORT var from .env file
const port = process.env.PORT;


const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes in productRoutes.js will be prefixed with /api/products
app.use('/api/products', productRoutes);

//Express runs middleware in the order we define it
//so notFound's next error handler is errorHandler
app.use(notFound);
app.use(errorHandler);


// starts the server and makes it “listen” for requests on port 5001.
app.listen(port, () => console.log(`Server running on port ${port}`))
