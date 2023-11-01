import express from "express"
import {
    getAllFeedback,
    createFeedback,
    updateFeedback,
    deleteFeedback,
    ratingSysteme
} from "../Controllers/feedbackController.js"
import { catchError } from "../Helper/cacthError.js";

const feedbackRoutes = new express.Router()

feedbackRoutes.get('/:slug', catchError(getAllFeedback))
feedbackRoutes.get('/rating/:slug', catchError(ratingSysteme))
feedbackRoutes.post('/create/:slug', catchError(createFeedback))
feedbackRoutes.put('/update/:slug', catchError(updateFeedback))
feedbackRoutes.delete('/delete/:slug', catchError(deleteFeedback))

export default feedbackRoutes