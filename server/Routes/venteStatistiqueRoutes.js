import express from "express"
import {catchError} from "../Helper/cacthError.js"
import {
    createVenteStatistique,
    getAllVentes,
    updateVenteStatistique
} from "../Controllers/venteStatistiqueController.js"

const venteStatRoutes = new express.Router()

venteStatRoutes.get('/:slug', catchError(getAllVentes))
venteStatRoutes.post('/create',catchError(createVenteStatistique))
venteStatRoutes.put('/update/:slug', catchError(updateVenteStatistique))

export default venteStatRoutes