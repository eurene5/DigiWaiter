import "../auth/auth.js"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import randToken from "rand-token"
import jwt from "jsonwebtoken"
import passport from "passport"
import nodeMailer from "nodemailer"
import { restaurantModel } from "../Models/restaurantsModel.js"
import {createPasswordResetToken,
        getPasswordResetToken,
        deletePasswordResetToken} from "../Controllers/resetController.js"

//initialisation du fichier des variables d'environnement
dotenv.config()

export const getAllRestaurant = async (_, res) => {
    const restaurants = await restaurantModel.find()
    res.status(200).send(restaurants)
}

export const getRestaurant = async (req, res) => {
    const {slug} = req.params
    const restaurant = await restaurantModel.find({slug : slug})
    res.status(200).send(restaurant)
}

export const getGroupeRestuarants = async (req, res) => {
    const { groupe } = req.params
    const {table , restaurant} = req.query

    if(restaurant && table){
        const restaurants = await restaurantModel.find({'groupe.name' : groupe})
                            .where('slug').equals(restaurant)
                            .exec()
        req.session.table = table
    }
    
    const restaurants = await restaurantModel.find({'groupe.name' : groupe})
    return res.status(200).json(restaurants)
}

export const login = async (req, res, next) => {
    passport.authenticate('login', async (err, restaurant) => {
       try {
        if(err || !restaurant)
            return next(new Error('une erreur est survenue lors de la connexion'))
            req.login(restaurant, {session : false}, async (err) => {
                if(err) return next(err)
                restaurant = {_id : restaurant._id, name : restaurant.name, mail : restaurant.mail}
                const token = jwt.sign(restaurant, process.env.JWTMDP)
                res.json({ token })
            })
       } catch (error) {
            return next(error)
       }   
    })(req, res, next)
}

export const register = async (req, res) => {
    var data = {...req.body}
    if (!req.file) {
        res.send("No file upload")
    } else {
        var imgsrc = req.file.filename
        data.medias = imgsrc
        data.password = bcrypt.hashSync(data.password, 14)
        data.slug = data.name.split(' ').join('-')
        const newRestaurant = new restaurantModel(data)
        await newRestaurant.save()
        res.status(200).send(newRestaurant)
    }
}

export const logout = async (req, res) => {
    req.logout()
    res.send("deconnecter")
}

export const forgotPassword = async (req, res) => {
    const restaurant = await restaurantModel.findOne({mail : req.body.mail})
    if(restaurant){
        const token = randToken.generate(16)

        //configuration et envoie du mail
        const transport = nodeMailer.createTransport({
            service : "gmail",
            port : 8000,
            secure : false,
            auth : {
                user : "digiwaiter.ispm@gmail.com",
                pass : process.env.MAILMDP
            }
        })

        const mailOption = {
            from : "digiwaiter.ispm@gmail.com",
            to :"ninhoandrianasolo@gmail.com",
            subject : "lien pour reinitialiser vôtre mot de passe",
            text : `cliquer sur ce lien pour reinitialiser votre mot de passe : localhost:8000/api/restaurants/reset/${token}`
        }
        await transport.sendMail(mailOption, async (err, response) => {
            if(err)
                console.log(err);
            else{
                //enregistrement dans la base de données reset
                const tokenReset = await createPasswordResetToken({mail : restaurant.mail, token : token, expireIn : Date.now() + 900000})
                res.send("mail sent successfuly")
            }
        })        
    } else {
        res.send("mail introuvable")
    }
}

export const defineAdminPassword = async (req, res) => {
    const username = req.body.username
    const password = bcrypt.hashSync(req.body.password, 14)
    const { slug } = req.params
    const updateRestaurant = await restaurantModel.findOneAndUpdate(
        {slug: slug},
        {admin : {
            username,
            password
        }
    }, {new: true})
    console.log(updateRestaurant)
    return res.status(200).json(updateRestaurant)
}

export  const resetPassword = async (req, res) => {
    const token = req.params.token
    const resetToken = getPasswordResetToken(token)
    resetToken.then( async tokenReset => {
        if(tokenReset){
            //redefinition du mot de passe
            if(req.body.password == req.body.password_){
                const password = bcrypt.hashSync(req.body.password, 16)
                await restaurantModel.findOneAndUpdate({mail : resetToken.mail}, {password : password})
                await deletePasswordResetToken(tokenReset.token)
                res.send("password update successfuly")
            }
        } else 
            res.send("le lien est expiré")
    })
}

export const deleteRestaurant = async (req, res) => {
    const slug = req.params.slug
    const restaurant = await restaurantModel.findOneAndDelete({slug : slug})
    res.send(restaurant)
}