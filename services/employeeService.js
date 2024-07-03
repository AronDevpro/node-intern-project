import {Employee} from "../models/employeeModel.js";


export const getAllEmployee = () => {
    return Employee.find();
}

export const createEmployee = async (data) => {
    const employee = new Employee(data);
    return await employee.save();
}

export const updateEmployee = async (id,data) => {
    const employee = await Employee.findById({_id: id});

    if (!employee) {
        return false;
    }

    employee.firstName = data.firstName;
    employee.lastName = data.lastName;
    employee.phoneNumber = data.phoneNumber;
    employee.address = data.address;
    employee.dob = data.dob;
    employee.nic = data.nic;
    employee.position = data.position;
    employee.salary = data.salary;

    return await employee.save();
}

export const deleteEmployee = async (id) => {
    const employee = await Employee.findById({_id: id});

    if (!employee) {
        return false;
    }
    return employee.deleteOne();
}