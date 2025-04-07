import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

//clears out existing orders
//prevent duplicate data if we run script multiple times
const importData = async() => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        //inserts sample users into DB
        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        //adds admin id into each product
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        //inserts updated products into DB
        await Product.insertMany(sampleProducts);

        console.log('Data Imported'.green.inverse);

        process.exit();

    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

//delete all sample data
const destroyData = async() => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data destroyed!'.red.inverse);
        process.exit();
    } catch (Error) {
            console.error(`&{error}`.red.inverse);
            process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}