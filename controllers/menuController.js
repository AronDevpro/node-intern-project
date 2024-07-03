import {createMenu, deleteMenu, getAllMenu, updateMenu} from "../services/menuService.js";

export const getMenus = async (req, res) => {
    try {
        const menus = await getAllMenu();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const postMenu = async (req, res) => {
    try {
        const newMenu = await createMenu(req.body);
        res.status(201).json({data:newMenu, message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const putMenu = async (req, res) => {
    try {
        const id = req.params.id
        const newMenu = await updateMenu(id,req.body);
        res.status(200).json({ data: newMenu , message: "Data Updated." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const delMenu = async (req, res) => {
    try {
        await deleteMenu(req.params.id);
        res.status(200).json({ message: "Data Deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

