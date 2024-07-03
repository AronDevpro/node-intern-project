import express from 'express';
import {delRestaurant, getRestaurants, postRestaurant, putRestaurant} from "../controllers/restaurantController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getRestaurants);

//api to save
router.post('/', postRestaurant)

//api to update
router.put('/:id', putRestaurant)
//
//api to delete
router.delete('/:id', delRestaurant)

export default router;