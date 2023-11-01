import express from "express"
import {
    getmenu,
    getmenus,
    updatemenu,
    personnaliseMenu,
    getCategorie,
    createmenu,
    deletemenu,
    searchMenu } from "../Controllers/menuController.js"

const routesmenu = new express.Router()

routesmenu.get('/restaurant/:restaurant', getmenus)
routesmenu.get('/:slug', getmenu)
routesmenu.get('/', searchMenu)
routesmenu.get('/categories/:restaurant', getCategorie)
routesmenu.post('/create/:slug', createmenu)
routesmenu.post('/create-personnalise/:slug', personnaliseMenu)
routesmenu.put('/update/:slug', updatemenu)
routesmenu.delete('/delete/:slug', deletemenu)

export default routesmenu