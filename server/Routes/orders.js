import express from "express";
import orderController from "../Controllers/orderController.js";

const routesorder = new express.Router()
const {
    getorders,
    getorder,
    createorder,
    updateorder,
    deleteorder
} = orderController

routesorder.get('/', getorders)
routesorder.get('/:slug', getorder)
routesorder.post('/', createorder)
routesorder.put('/:slug', updateorder)
routesorder.delete('/:slug', deleteorder)

export default routesorder