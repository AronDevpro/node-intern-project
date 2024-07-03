import mongoose from "mongoose";

const schema = new mongoose.Schema({
    itemName: {type:String, required:true},
    quantity: {type:Number, required:true}
})

export const Inventory = mongoose.model("inventory", schema);