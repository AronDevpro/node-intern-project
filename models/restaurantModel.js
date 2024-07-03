import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    phoneNumber: {type:String, required:true},
    address: {type:String, required:true}
})

export const Restaurant = mongoose.model("restaurant", schema);