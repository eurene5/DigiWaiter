import express from "express"
import multer from "multer"
import path from "path"
import { catchError } from "../Helper/cacthError.js"
import { getAllRestaurant,
        //  getRestaurant,
         getGroupeRestuarants,
         login,
         register,
         logout,
         forgotPassword,
         resetPassword,
         defineAdminPassword,
         deleteRestaurant } from "../Controllers/restaurantController.js"

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../public/upload')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

const RestaurantRoutes = new express.Router()

RestaurantRoutes.get('/', catchError(getAllRestaurant))
// RestaurantRoutes.get('/single/:slug', catchError(getRestaurant))
RestaurantRoutes.get('/:groupe', catchError(getGroupeRestuarants))
RestaurantRoutes.post('/signup', catchError(register))
RestaurantRoutes.delete('/delete/:slug', catchError(deleteRestaurant))
RestaurantRoutes.put('/define-admin-password/:slug', catchError(defineAdminPassword))
RestaurantRoutes.post('/login', catchError(login))
RestaurantRoutes.get('/logout', catchError(logout))
RestaurantRoutes.post('/forgot', catchError(forgotPassword))
RestaurantRoutes.post('/reset/:token', catchError(resetPassword))

export default RestaurantRoutes