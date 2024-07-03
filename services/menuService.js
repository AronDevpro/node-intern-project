import {Menu} from "../models/menuModel.js";


export const getAllMenu = () => {
    return Menu.find();
}

export const createMenu = async (data) => {
    const menu = new Menu(data);
    return await menu.save();
}

export const updateMenu = async (id,data) => {
    const menu = await Menu.findById({_id: id});

    if (!menu) {
        return false;
    }

    menu.itemName = data.itemName;
    menu.price = data.price;

    return await menu.save();
}

export const deleteMenu = async (id) => {
    const menu = await Menu.findById({_id: id});

    if (!menu) {
        return false;
    }
    return menu.deleteOne();
}