import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    contactNumber: {type:String, required:true},
    address: {type:String, required:true}
})

export const Supplier = mongoose.model("supplier", schema);