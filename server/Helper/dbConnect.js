import dotenv from "dotenv"
import mongoose from "mongoose"

//initialisation des variables
dotenv.config()
const dbParams = {
    useNewUrlParser: true,
    useUnifiedTopology : true
}

//instancier la connexion à la base de données

export const ConnectDB = () => {
    mongoose.connect(process.env.URIDB, dbParams)
}