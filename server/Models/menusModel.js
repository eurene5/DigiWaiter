import { restaurantShema } from "./restaurantsModel.js"
import { categorieShema } from "./categorieModel.js"
import mongoose from "mongoose"

const itemsSchema = new mongoose.Schema({
    name : {type : String},
    price : {type : Number, default: 0}
})

const categorieSchema = new mongoose.Schema({
    name : {type : String},
    limite : {type : Number},
    itmes : [{type : itemsSchema, default : () => ({})}]
})
const optionSchema = new mongoose.Schema({
    categories : [{type : categorieSchema, default : () => ({})}]
})

export const menuShema = mongoose.Schema({
    name : {type : String, requiered : true, trim : true},
    ingredients : {type : String, requiered : true},
    price : {type : Number, requiered :true},
    disponible : {type : Boolean, default : true},
    slug : { type : String, requiered : true, lowercase : true},
    medias : {type : String, requiered : true},
    options : [{type : optionSchema, default : () => ({})}],
    categorie : {type : categorieShema, requiered : true},
    restaurant : {type : restaurantShema, requiered : true}
})

const menuModel = mongoose.model("menus", menuShema)
export default menuModel