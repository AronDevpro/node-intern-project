import {createSupplier, deleteSupplier, getAllSuppliers, updateSupplier} from "../services/supplierService.js";

export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await getAllSuppliers();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const postSupplier = async (req, res) => {
    try {
        const newSupplier = await createSupplier(req.body);
        res.status(201).json({data:newSupplier, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const putSupplier = async (req, res) => {
    try {
        const id = req.params.id
        const newSupplier = await updateSupplier(id,req.body);
        res.status(200).json({ data: newSupplier , message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delSupplier = async (req, res) => {
    try {
        await deleteSupplier(req.params.id);
        res.status(200).json({ message: "Data Deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

