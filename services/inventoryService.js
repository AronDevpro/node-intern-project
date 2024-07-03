import {Inventory} from "../models/inventoryModel.js";


export const getAllInventory = () => {
    return Inventory.find();
}

export const createInventory = async (inventoryData) => {
    const inventory = new Inventory(inventoryData);
    return await inventory.save();
}

export const updateInventory = async (id,data) => {
    const inventory = await Inventory.findById({_id: id});

    if (!inventory) {
        return false;
    }

    inventory.itemName = data.itemName;
    inventory.quantity = data.quantity;

    return await inventory.save();
}

export const deleteInventory = async (id) => {
    const inventory = await Inventory.findById({_id: id});

    if (!inventory) {
        return false;
    }
    return inventory.deleteOne();
}