import {createRestaurant, deleteRestaurant, getAllRestaurant, updateRestaurant} from "../services/restaurantService.js";

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await getAllRestaurant();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const postRestaurant = async (req, res) => {
    try {
        const newRestaurant = await createRestaurant(req.body);
        res.status(201).json({data:newRestaurant, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const putRestaurant = async (req, res) => {
    try {
        const id = req.params.id
        const newRestaurant = await updateRestaurant(id,req.body);
        res.status(200).json({ data: newRestaurant , message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delRestaurant = async (req, res) => {
    try {
        await deleteRestaurant(req.params.id);
        res.status(200).json({ message: "Data Deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

