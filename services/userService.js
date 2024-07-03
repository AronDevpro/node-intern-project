import {User} from "../models/UserModel.js";
import bcrypt from "bcrypt";
import {generateToken} from "../utils/jwtUtil.js";

const saltRounds = 10;
export const getAllUsers = ()=>{
    return User.find();
}
export const createUser = async (data) => {
    const {name, email, password} = data;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('Email already exists');
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
        name,
        email,
        password: hash,
    });
    return await newUser.save();
}

export const logUser = async (data) => {
    const { email, password } = data;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password.');
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid email or password.');
    }
    return generateToken(user);
};