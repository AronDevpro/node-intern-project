import {Order} from "../models/orderModel.js";
import {Customer} from "../models/customerModel.js";
import {Menu} from "../models/menuModel.js";

export const getAllOrder = () => {
    return Order.find();
}

export const createOrder = async (data) => {
    const customer = await Customer.findById(data.customerId);

    if (!customer) {
        return false;
    }

    let totalAmount = 0;
    const orderItems = [];

    for (const item of data.orderItems) {
        const menuExists = await Menu.findById(item.menuId);
        if (!menuExists) {
            return false;
        }
        totalAmount += menuExists.price * item.quantity;
        orderItems.push({
            menuId: item.menuId,
            quantity: item.quantity
        });
    }

    const order = new Order({
        customerId: data.customerId,
        totalAmount: totalAmount,
        orderItems: orderItems
    });

    const savedOrder = await order.save();

    if (!savedOrder) {
        return false;
    }

    return savedOrder;
};


export const canOrder = async (id) => {
    const order = await Order.findById({_id: id});

    if (!order) {
        return false;
    }

    order.status = "cancelled";

    return await order.save();
}