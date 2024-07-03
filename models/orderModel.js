import mongoose from "mongoose";
import {OrderItem} from "./orderItemsModel.js";

const schema = new mongoose.Schema({
    customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true},
    orderDate: {type: String, required: true, default: () => new Date().toLocaleDateString()},
    totalAmount: {type: Number, required: true},
    status: {type: String, required: true, default: "completed"},
    orderItems: [OrderItem.schema]
});

export const Order = mongoose.model("order", schema);