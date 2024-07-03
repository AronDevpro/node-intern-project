import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    phoneNumber: {type:String, required:true}
})

export const Customer = mongoose.model("customer", schema);