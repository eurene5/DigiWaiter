import mongoose from "mongoose"
import { restaurantShema } from "./restaurantsModel.js"

export const categorieShema = mongoose.Schema({
    name : {type : String, requiered : true, trim : true},
    restaurant : {type : restaurantShema, requiered : true}
})

export const categorieModel = mongoose.model("categories", categorieShema)
