import express from 'express';
import {
    delSupplier,
    getSuppliers, postSupplier,
    putSupplier
} from "../controllers/supplierController.js";
import {verifyToken} from "../middleware/authMiddleware.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getSuppliers);

//api to save
router.post('/', postSupplier)

//api to update
router.put('/:id', putSupplier)
//
//api to delete
router.delete('/:id', delSupplier)

export default router;