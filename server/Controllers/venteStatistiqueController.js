import venteStatistique from "../Models/venteStatistique.js"
import randToken from "rand-token"
import {
    getTodayDate,
    getTodayMonth,
    getTodayYear
} from "../Helper/dateHelper.js"
import { restaurantModel } from "../Models/restaurantsModel.js"

export const getAllVentes = async (req, res) => {
    
    const {slug} = req.params
    const restaurant = await restaurantModel.find({slug : slug})
    console.log(restaurant);
    const ventes = await venteStatistique.find({restaurant : restaurant})

    res.status(200).send(ventes)

}

export const createVenteStatistique = async (_, res) => {

    const slug = randToken.generate(16)
    const venteStat = new venteStatistique({slug})
    venteStat.An = [{}]
    await venteStat.save()

    res.status(200).send(venteStat)
}

export const updateVenteStatistique = async (req, res) => {

    const data = { ... req.body }
    const {slug} = req.params
    const today = getTodayDate()
    const month = getTodayMonth()
    const year = getTodayYear()
    
    const restauStatistique = await venteStatistique.findOne({slug : slug})
    let statSemaine = restauStatistique.semaine
    const statMois = restauStatistique.mois
    const statAn = restauStatistique.An
    const jour = statSemaine[today]
    const mois = statMois[month]
    const annee = statAn[0]

    if(today === "lundi" && !req.session.initialise) {
        req.session.initialise = true
        statSemaine = {
            lundi : {visiteurs : 0, ventes : 0},
            mardi : {visiteurs : 0, ventes : 0},
            mercredi : {visiteurs : 0, ventes : 0},
            jeudi : {visiteurs : 0, ventes : 0},
            vendredi : {visiteurs : 0, ventes : 0},
            samedi : {visiteurs : 0, ventes : 0},
            dimanche : {visiteurs : 0, ventes : 0}
        }
    }

    jour.visiteurs += 1
    jour.ventes +=  data.ventes
    mois.ventes += data.ventes
    mois.visiteurs += 1
    annee[year].visiteurs += 1
    annee[year].ventes += data.ventes
    const statistique = await venteStatistique.findOneAndUpdate({slug : slug}, {
        semaine : restauStatistique.semaine,
        mois : restauStatistique.mois,
        An : restauStatistique.An}, 
        {new : true})
    res.status(200).send(statistique)
}