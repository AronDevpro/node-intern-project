import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    // orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'order', required: true },
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'menu', required: true },
    quantity: { type: Number, required: true }
});

export const OrderItem = mongoose.model("orderItem", orderItemSchema);