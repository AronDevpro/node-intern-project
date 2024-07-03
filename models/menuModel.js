import mongoose from "mongoose";

const schema = new mongoose.Schema({
    itemName: {type:String, required:true},
    price: {type:Number, required:true}
})

export const Menu = mongoose.model("menu", schema);