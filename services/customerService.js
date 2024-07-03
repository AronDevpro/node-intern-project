import {Customer} from "../models/customerModel.js";


export const getAllCustomer = () => {
    return Customer.find();
}

export const createCustomer = async (data) => {
    const customer = new Customer(data);
    return await customer.save();
}

export const updateCustomer = async (id,data) => {
    const customer = await Customer.findById({_id: id});

    if (!customer) {
        return false;
    }

    customer.name = data.name;
    customer.phoneNumber = data.phoneNumber;
    customer.email = data.email;

    return await customer.save();
}

export const deleteCustomer = async (id) => {
    const customer = await Customer.findById({_id: id});

    if (!customer) {
        return false;
    }
    return customer.deleteOne();
}