import express from "express"
import {
    getAllFeedback,
    createFeedback,
    updateFeedback,
    deleteFeedback
} from "../Controllers/feedbackController.js"
import { catchError } from "../Helper/cacthError.js";

const feedbackRoutes = new express.Router()

feedbackRoutes.get('/', catchError(getAllFeedback))
feedbackRoutes.post('/create', catchError(createFeedback))
feedbackRoutes.put('/update/:slug', catchError(updateFeedback))
feedbackRoutes.get('/paiement/:slug', catchError(updateFeedback))
feedbackRoutes.delete('/delete/:slug', catchError(deleteFeedback))

export default feedbackRoutes