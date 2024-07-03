import {createOrder, getAllOrder, canOrder} from "../services/orderService.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await getAllOrder();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const postOrder = async (req, res) => {
    try {
        const newOrder = await createOrder(req.body);
        res.status(201).json({data:newOrder, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const cancelOrder = async (req, res) => {
    try {
        const id = req.params.id
        const newOrder = await canOrder(id);
        res.status(200).json({ data: newOrder , message: "Order Cancelled." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

