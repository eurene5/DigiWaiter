import mongoose from "mongoose"
import { getTodayYear } from "../Helper/dateHelper.js"

const year = getTodayYear()

const jourSchema = mongoose.Schema({
    visiteurs : {type : Number, default : 0},
    ventes : {type : Number, default : 0}
})

const weekShema = mongoose.Schema({
    lundi : {type : jourSchema, default : () => ({})},
    mardi : {type : jourSchema, default : () => ({})},
    mercredi : {type : jourSchema, default : () => ({})},
    jeudi : {type : jourSchema, default : () => ({})},
    vendredi : {type : jourSchema, default : () => ({})},
    samedi : {type : jourSchema, default : () => ({})},
    dimanche : {type : jourSchema, default : () => ({})}
})

const monthSchema = mongoose.Schema({
    janvier : {type : jourSchema, default : () => ({})},
    fevrier : {type : jourSchema, default : () => ({})},
    mars: {type : jourSchema, default : () => ({})},
    avril : {type : jourSchema, default : () => ({})},
    mai : {type : jourSchema, default : () => ({})},
    juin : {type : jourSchema, default : () => ({})},
    juillet : {type : jourSchema, default : () => ({})},
    aout : {type : jourSchema, default : () => ({})},
    septembre : {type : jourSchema, default : () => ({})},
    octobre : {type : jourSchema, default : () => ({})},
    novembre : {type : jourSchema, default : () => ({})},
    decembre : {type : jourSchema, default : () => ({})}
})

const yearSchema = mongoose.Schema({
    [year] : {type : jourSchema, default : () => ({})}
})

const venteStatistiqueSchema = mongoose.Schema({
    semaine : {type : weekShema, default : () => ({})},
    mois : {type : monthSchema, default : () => ({})},
    An : [{type : yearSchema, default : () => ({})}],
    slug : {type : String, requiered : true}
})

const venteStatistiqueModel = new mongoose.model('statistiqueVente', venteStatistiqueSchema)
export default venteStatistiqueModel