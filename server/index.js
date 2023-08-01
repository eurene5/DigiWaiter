//importation des modules
import express from "express"
import session from "express-session"
import { createServer } from "http"
import mongoose from "mongoose"
import {Server} from "socket.io"
import routesRestaurant from './Routes/restaurants.js'
import routesmenu from "./Routes/menus.js"
import routesorder from "./Routes/orders.js"
import routesCart from "./Routes/cart.js"
import routesQR from "./Routes/generatorQR.js"
import routesMedias from "./Routes/medias.js"
import routes from "./Routes/categorie.js"
import cors from "cors";

//initialisation des variables
const port = 8000
const app = express()
const httpServer = createServer(app)
const uri = "mongodb://127.0.0.1/digiwaiter"
const options = {useNewUrlParser: true, useUnifiedTopology: true}

const io = new Server(httpServer)

//initialisation des middleware et connection à la base de donnée
mongoose.connect(uri, options)
app.use(cors())
app.use(express.static('./public'))
app.use(express.static('Public'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(session({secret: 'secret', resave: false, saveUninitialized: true, cookie: { maxAge: 60000 }}))

//Initialisation des routes
app.use('/api/restaurants', routesRestaurant)
app.use('/api/menus', routesmenu)
app.use('/api/orders', routesorder)
app.use('/api/cart', routesCart)
app.use('/api/categories', routes)
app.use('/api/QRgenerator', routesQR)
app.use('/api/medias', routesMedias)

httpServer.listen(port, () => {
    console.log(`serveur en marche sur le port ${port}`)
})