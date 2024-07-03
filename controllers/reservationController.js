import {createReservation, deleteReservation, getAllReservation, updateReservation} from "../services/reservationService.js";

export const getReservations = async (req, res) => {
    try {
        const reservations = await getAllReservation();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const postReservation = async (req, res) => {
    try {
        const newReservation = await createReservation(req.body);
        res.status(201).json({data:newReservation, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const putReservation = async (req, res) => {
    try {
        const id = req.params.id
        const newReservation = await updateReservation(id,req.body);
        res.status(200).json({ data: newReservation , message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delReservation = async (req, res) => {
    try {
        await deleteReservation(req.params.id);
        res.status(201).json({ message: "Data Deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

