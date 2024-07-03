import {Reservation} from "../models/reservationModel.js";


export const getAllReservation = () => {
    return Reservation.find();
}

export const createReservation = async (data) => {
    const reservation = new Reservation(data);
    return await reservation.save();
}

export const updateReservation = async (id,data) => {
    const reservation = await Reservation.findById({_id: id});

    if (!reservation) {
        return false;
    }

    reservation.customerId = data.customerId;
    reservation.date = data.date;
    reservation.time = data.time;
    reservation.noOfPeople = data.noOfPeople;

    return await reservation.save();
}

export const deleteReservation = async (id) => {
    const reservation = await Reservation.findById({_id: id});

    if (!reservation) {
        return false;
    }
    return reservation.deleteOne();
}