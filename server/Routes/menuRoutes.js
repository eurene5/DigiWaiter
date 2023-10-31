import express from "express"
import { getmenu, getmenus, updatemenu, getCategorie, createmenu, deletemenu } from "../Controllers/menuController.js";

const routesmenu = new express.Router()

routesmenu.get('/restaurant/:restaurant', getmenus)
routesmenu.get('/:slug', getmenu)
routesmenu.get('/categories/:restaurant', getCategorie)
routesmenu.post('/', createmenu)
routesmenu.put('/:slug', updatemenu)
routesmenu.delete('/:slug', deletemenu)

export default routesmenu