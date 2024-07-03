import {createCustomer, deleteCustomer, getAllCustomer, updateCustomer} from "../services/customerService.js";


export const getCustomers = async (req, res) => {
    try {
        const customers = await getAllCustomer();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const postCustomer = async (req, res) => {
    try {
        const newCustomer = await createCustomer(req.body);
        res.status(201).json({data:newCustomer, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const putCustomer = async (req, res) => {
    try {
        const id = req.params.id
        const newCustomer = await updateCustomer(id,req.body);
        res.status(200).json({ data: newCustomer , message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delCustomer = async (req, res) => {
    try {
        await deleteCustomer(req.params.id);
        res.status(200).json({ message: "Data Deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

