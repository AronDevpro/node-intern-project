import express from 'express';
import {
    delMenu,
    getMenus, postMenu,
    putMenu
} from "../controllers/menuController.js";

//creating a router
const router = express.Router();

//api to get all the data
router.get('/', getMenus);

//api to save
router.post('/', postMenu)

//api to update
router.put('/:id', putMenu)
//
//api to delete
router.delete('/:id', delMenu)

export default router;