import express from 'express';
import {
    getOrders, postOrder,
    cancelOrder
} from "../controllers/orderController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getOrders);

//api to save
router.post('/', postOrder)

//api to cancel
router.put('/cancel/:id', cancelOrder)

export default router;