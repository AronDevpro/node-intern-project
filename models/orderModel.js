import mongoose from "mongoose";

const schema = new mongoose.Schema({
    customerId: {type:String, required:true, menuId:[
            { type: mongoose.Schema.Types.ObjectId, ref: 'customer' }
        ]},
    orderDate: {type:String, required:true, default: new Date().toLocaleDateString()},
    totalAmount: {type:Number, required:true},
    status: {type:String, required:true, default:"completed"},
    orderItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orderItem' }]
})

export const Order = mongoose.model("order", schema);