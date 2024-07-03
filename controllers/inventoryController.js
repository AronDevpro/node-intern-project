import {createInventory, deleteInventory, getAllInventory, updateInventory} from "../services/inventoryService.js";
import {Inventory} from "../models/inventoryModel.js";


export const getInventories = async (req, res) => {
    try {
        const inventories = await getAllInventory();
        res.status(200).json(inventories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const postInventory = async (req, res) => {
    try {
        const newInventory = await createInventory(req.body);
        res.status(200).json({data:newInventory, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const putInventory = async (req, res) => {
    try {
        const id = req.params.id
        const newInventory = await updateInventory(id,req.body);
        res.status(200).json({ data: newInventory , message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delInventory = async (req, res) => {
    try {
        await deleteInventory(req.params.id);
        res.status(201).json({ message: "Data Deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

