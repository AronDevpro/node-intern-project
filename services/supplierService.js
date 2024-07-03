import {Supplier} from "../models/supplierModel.js";

export const getAllSuppliers = () => {
    return Supplier.find();
}

export const createSupplier = async (data) => {
    const supplier = new Supplier(data);
    return await supplier.save();
}

export const updateSupplier = async (id,data) => {
    const supplier = await Supplier.findById({_id: id});

    if (!supplier) {
        return false;
    }

    supplier.name = data.name;
    supplier.contactNumber = data.contactNumber;
    supplier.address = data.address;

    return await supplier.save();
}

export const deleteSupplier = async (id) => {
    const supplier = await Supplier.findById({_id: id});

    if (!supplier) {
        return false;
    }
    return supplier.deleteOne();
}