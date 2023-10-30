import express from "express";
import { getmenu, getmenus, updatemenu, createmenu, deletemenu } from "../Controllers/menuController.js";

const routesmenu = new express.Router()

routesmenu.get('/', getmenus)
routesmenu.get('/:slug', getmenu)
routesmenu.post('/', createmenu)
routesmenu.put('/:slug', updatemenu)
routesmenu.delete('/:slug', deletemenu)

export default routesmenu