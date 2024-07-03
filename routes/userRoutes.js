import express from 'express';
import {getUsers, loginUser, registerUser} from "../controllers/userController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getUsers);

//api to save
router.post('/register', registerUser)

router.post('/login', loginUser);

export default router;