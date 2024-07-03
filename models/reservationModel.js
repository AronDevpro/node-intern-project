import mongoose from "mongoose";

const schema = new mongoose.Schema({
    customerId: {type:String, required:true, menuId:[
            { type: mongoose.Schema.Types.ObjectId, ref: 'customer' }
        ]},
    date: {type:String, required:true},
    time: {type:String, required:true},
    noOfPeople: {type:Number, required:true}
})

export const Reservation = mongoose.model("reservation", schema);