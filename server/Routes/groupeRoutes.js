import express from "express"
import {    createGroupe,
            deleteGroupe,
            getAllGroupe,
            getGroupe,
            updateGroupe
} from "../Controllers/groupeControllers.js";
import { catchError } from "../Helper/cacthError.js";

const groupesRoutes = new express.Router()

groupesRoutes.get('/', catchError(getAllGroupe))
groupesRoutes.get('/:slug', catchError(getGroupe))
groupesRoutes.post('/create', catchError(createGroupe))
groupesRoutes.put('/update/:slug', catchError(updateGroupe))
groupesRoutes.delete('/delete/:slug', catchError(deleteGroupe))

export default groupesRoutes