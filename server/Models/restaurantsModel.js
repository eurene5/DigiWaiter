import bcrypt from "bcryptjs"
import { groupeShema } from "./groupeModel.js"
import mongoose from "mongoose"

const adminShema = new mongoose.Schema({
    username : {type : String, default : "admin"},
    password : {type : String, default : "admin"}
})

export const restaurantShema = new mongoose.Schema({
    name : { type : String, requiered : true, trim : true},
    location : { type : String, requiered : true},
    mail : { type : String, requiered : true},
    tel : {type : String, requiered : true},
    slug : {type : String, requiered : true, lowercase : true},
    password : {type : String, requiered : true},
    note : {type : Number, requiered : true, default : 0},
    medias : {type : String, requiered : true},
    admin : [{type : adminShema, default : () => ({})}],
    groupe : {type : groupeShema, requiered : true, default : {name : "independant"}}
})

//rajouter un methode pour verifier le mot de passe

restaurantShema.methods.isValidPassword = async function(password) {
    const restaurant = this
    const validate = bcrypt.compareSync(password, restaurant.password)
    return validate
}

export const restaurantModel = mongoose.model("restaurants", restaurantShema)