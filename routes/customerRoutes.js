import express from 'express';
import {
    delCustomer,
    getCustomers, postCustomer,
    putCustomer
} from "../controllers/customerController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getCustomers);

//api to save
router.post('/', postCustomer)

//api to update
router.put('/:id', putCustomer)
//
//api to delete
router.delete('/:id', delCustomer)

export default router;