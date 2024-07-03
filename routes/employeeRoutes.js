import express from 'express';
import {
    delEmployee,
    getEmployees, postEmployee,
    putEmployee
} from "../controllers/employeeController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getEmployees);

//api to save
router.post('/', postEmployee)

//api to update
router.put('/:id', putEmployee)
//
//api to delete
router.delete('/:id', delEmployee)

export default router;