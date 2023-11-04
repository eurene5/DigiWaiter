import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import session from "express-session"
import routesmenu from "./Routes/menuRoutes.js"
import routesCart from "./Routes/cartRoutes.js"
import { ConnectDB } from "./Helper/dbConnect.js"
import groupesRoutes from "./Routes/groupeRoutes.js"
import favorisRoutes from "./Routes/favorisRoutes.js"
import venteStatRoutes from "./Routes/venteStatistiqueRoutes.js"
import factureRoutes from "./Routes/factureRoutes.js"
import feedbackRoutes from "./Routes/feedbackRoutes.js"
import RestaurantRoutes from "./Routes/restaurantRoutes.js"


//initialisation des variables
dotenv.config()
ConnectDB()
const app = express()
const PORT = process.env.PORT || 3000

//initialisation des middlewares
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(session({secret: 'secret',
                resave: false,
                saveUninitialized: false,
                cookie: { maxAge: 1000 * 60 * 60 * 24 }}))


app.use('/api/cart', routesCart)
app.use('/api/menus', routesmenu)
app.use('/api/groupes', groupesRoutes)
app.use('/api/ventes/', venteStatRoutes)
app.use('/api/factures', factureRoutes)
app.use('/api/favoris', favorisRoutes)
app.use('/api/feedback', feedbackRoutes)
app.use('/api/restaurants', RestaurantRoutes)


//lancement du serveur
app.listen(PORT, () => {
    console.log(`Le serveur est en marche sur le port ${PORT}...`);
})