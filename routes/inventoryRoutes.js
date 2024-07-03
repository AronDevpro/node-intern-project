import express from 'express';
import {
    delInventory,
    getInventories, postInventory,
    putInventory
} from "../controllers/inventoryController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getInventories);

//api to save
router.post('/', postInventory)

//api to update
router.put('/:id', putInventory)
//
//api to delete
router.delete('/:id', delInventory)

export default router;