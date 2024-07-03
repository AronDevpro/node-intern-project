import {createEmployee, deleteEmployee, getAllEmployee, updateEmployee} from "../services/employeeService.js";

export const getEmployees = async (req, res) => {
    try {
        const employees = await getAllEmployee();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const postEmployee = async (req, res) => {
    try {
        const newEmployee = await createEmployee(req.body);
        res.status(201).json({data:newEmployee, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const putEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const newEmployee = await updateEmployee(id,req.body);
        res.status(200).json({ data: newEmployee , message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delEmployee = async (req, res) => {
    try {
        await deleteEmployee(req.params.id);
        res.status(200).json({ message: "Data Deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

