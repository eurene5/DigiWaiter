import express from "express"
import {
    processPayement,
    createfacture,
    deletefacture,
    updatefacture,
    getfactures,
    getfacture
} from "../Controllers/factureController.js"
import { catchError } from "../Helper/cacthError.js";

const factureRoutes = new express.Router()

factureRoutes.get('/', catchError(getfactures))
factureRoutes.get('/:slug', catchError(getfacture))
factureRoutes.post('/create', catchError(createfacture))
factureRoutes.put('/update/:slug', catchError(updatefacture))
factureRoutes.get('/paiement/:slug', catchError(processPayement))
factureRoutes.delete('/delete/:slug', catchError(deletefacture))

export default factureRoutes