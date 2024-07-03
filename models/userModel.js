import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    email: { type: String, required: true, index:true, unique:true, match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address']},
    password: {type:String, required:true},
    status: {type:String, required:true, default:"active"},
    createdAt:{type: String, required: true, default: () => new Date().toLocaleDateString()},
})

export const User = mongoose.model("user", schema);