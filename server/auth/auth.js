import dotenv from "dotenv"
import passport from "passport"
import { Strategy } from "passport-local"
import jwt, { ExtractJwt } from "passport-jwt"
import { restaurantModel } from "../Models/restaurantsModel.js"

dotenv.config()

const { Strategy : JWTstrategy} = jwt

passport.use(
    'login',
    new Strategy({
        usernameField : 'mail',
        passwordField : 'password'
    },
    async (mail, password, done) => {
        try {
            const restaurant = await restaurantModel.findOne({mail : mail})
            if(restaurant){
                const validate = await restaurant.isValidPassword(password)
                if(validate){
                    return done(null, restaurant, {message : "connected successffuly"})
                } else
                    return done(null, false, {message : "mot de passe ou identifiant incorrecte"})
            } else
                return done(null, false, {message : "mot de passe ou identifiant incorrecte"})
        } catch (err) {
            return done(err)
        }
    })
)

passport.use(
    new JWTstrategy({
        secretOrKey : process.env.JWTMDP,
        jwtFromRequest : ExtractJwt.fromUrlQueryParameter('token')
    },
    async (token, done) => {
        try {
            return done(null, token)
        } catch (error) {
            return done(error)
        }
    })
)

export default passport