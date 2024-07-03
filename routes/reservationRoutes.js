import express from 'express';
import {
    delReservation,
    getReservations, postReservation,
    putReservation
} from "../controllers/reservationController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getReservations);

//api to save
router.post('/', postReservation)

//api to update
router.put('/:id', putReservation)
//
//api to delete
router.delete('/:id', delReservation)

export default router;