import mongoose from "mongoose";

const schema = new mongoose.Schema({
    orderId: {type:String, required:true, orderId:[
            { type: mongoose.Schema.Types.ObjectId, ref: 'order' }
        ]},
    menuId: {type:String, required:true, menuId:[
            { type: mongoose.Schema.Types.ObjectId, ref: 'menu' }
        ]},
    quantity: {type:Number, required:true}
})

export const OrderItem = mongoose.model("orderItem", schema);