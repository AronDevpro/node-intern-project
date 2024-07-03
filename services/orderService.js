import {Order} from "../models/orderModel.js";
import {Customer} from "../models/customerModel.js";
import {Menu} from "../models/menuModel.js";
import {OrderItem} from "../models/orderItemsModel.js";

export const getAllOrder = async () => {
    try {
        const orders = await Order.find()
            .populate({
                path: 'orderItems',
                populate: { path: 'menuId' }  // Assuming you want to populate menu details as well
            })
            .populate('customerId');  // Assuming you want to populate customer details

        // Format the data to match the desired output for each order
        const formattedOrders = orders.map(order => ({
            customerId: order.customerId._id,
            orderDate: order.orderDate,
            orderId: order._id,
            orderItems: order.orderItems.map((item, index) => ({
                menuId: item.menuId._id,
                orderId: item.orderId,
                orderItemId: item._id,
                quantity: item.quantity
            })),
            status: order.status,
            totalAmount: order.totalAmount
        }));

        return formattedOrders;
    } catch (error) {
        console.error("Error fetching orders with items:", error);
        throw error;
    }
}

export const createOrder = async (data) => {
    const customer = await Customer.findById({_id: data.customerId});

    if (!customer) {
        return false;
    }

    let totalAmount = 0;

    for (const item of data.orderItems) {
        const menuExists = await Menu.findById({_id: item.menuId});
        if (!menuExists) {
            return false;
        }
        totalAmount += menuExists.price * item.quantity;
    }

    const order = new Order({
        customerId: data.customerId,
        totalAmount: totalAmount
    });

    const savedOrder = await order.save();

    if (!savedOrder) {
        return false;
    }

    const orderItems = data.orderItems.map(item => ({
        orderId: savedOrder._id,
        menuId: item.menuId,
        quantity: item.quantity
    }));

    const savedOrderItems = await OrderItem.insertMany(orderItems);

    if (!savedOrderItems) {
        return false;
    }

    return savedOrderItems;
};


export const canOrder = async (id) => {
    const order = await Order.findById({_id: id});

    if (!order) {
        return false;
    }

    order.status = "cancelled";

    return await order.save();
}