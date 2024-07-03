import {createUser, getAllUsers, logUser} from "../services/userService.js";


export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const registerUser = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json({data:newUser, message: "User Registered" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const token = await logUser(req.body);
        res.status(201).json({Token:token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


