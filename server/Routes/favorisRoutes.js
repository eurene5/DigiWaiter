import express from "express"
import { catchError } from "../Helper/cacthError.js"
import {
    getfavoris,
    createFavoris,
    updateFavoris
} from "../Controllers/favorisController.js"

const favorisRoutes = new express.Router()

favorisRoutes.get('/:slug', catchError(getfavoris))
favorisRoutes.post('/create/:slug',catchError(createFavoris))
favorisRoutes.put('/update/:slug', catchError(updateFavoris))

export default favorisRoutes