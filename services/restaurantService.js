import {Restaurant} from "../models/restaurantModel.js";


export const getAllRestaurant = () => {
    return Restaurant.find();
}

export const createRestaurant = async (data) => {
    const restaurant = new Restaurant(data);
    return await restaurant.save();
}

export const updateRestaurant = async (id,data) => {
    const restaurant = await Restaurant.findById({_id: id});

    if (!restaurant) {
        return false;
    }

    restaurant.name = data.name;
    restaurant.phoneNumber = data.phoneNumber;
    restaurant.address = data.address;

    return await restaurant.save();
}

export const deleteRestaurant = async (id) => {
    const restaurant = await Restaurant.findById({_id: id});

    if (!restaurant) {
        return false;
    }
    return restaurant.deleteOne();
}