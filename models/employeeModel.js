import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    phoneNumber: {type:String, required:true},
    address: {type:String, required:true},
    dob: {type:String, required:true},
    nic: {type:String, required:true},
    position: {type:String, required:true},
    salary: {type:String, required:true},
})

export const Employee = mongoose.model("employee", schema);