import express from 'express';
import mongoose from 'mongoose';
import Restaurant from '../models/restaurants.js'

const router = express.Router();


// export const getRestaurants = async (req, res) => {    
//     try {
//         //const total = await Restaurant.countDocuments({});
//         const restaurants = await Restaurant.find().sort({ _id: -1 });

//         res.json({ data: restaurants});
//     } catch (error) {    
//         res.status(404).json({ message: error.message });
//     }
// }

export default router;