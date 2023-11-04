import express from "express"
import categorieController from "../Controllers/categorieController.js"

const routes = new express.Router()
const {
    findRestaurantCategorie,
    createCategorie
} = categorieController

routes.get("/:restaurant", findRestaurantCategorie)
routes.post("/", createCategorie)

export default routes