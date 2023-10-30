import Stripe from "stripe"
import randToken from "rand-token"
import Cart from "./cartController.js"
import Facture from "../Models/factureModel.js"
import facture from "../Models/factureModel.js"

export const getfactures = async (_, res) => {
    const allfactures = await Facture.find()
    return res.status(200).send(allfactures)
}

export const getfacture = async (req, res) => {
    const { slug } = req.params
    const facture = await Facture.find({slug: slug})
    return res.status(200).send(facture)
}

//création de facture
export const createfacture = async (req, res) => {
    const body = req.body
    let sessionCart = req.session.cart
    
    if(sessionCart){
        const cart = new Cart(sessionCart)
        const {items} = sessionCart
        const restaurantName = req.body.restaurantName

        if(restaurantName == "All") {

            const slug = randToken.generate(14)
            const data = {
                content : items,
                table : body.table,
                slug : slug
            }

            new Facture(data).save()
            Reflect.deleteProperty(req.session, "cart")
            return res.send("tout les commandes ont été facturer")

        } else {

            for(let restaurant in items){

                if(restaurant == restaurantName ){

                    //enregistrement dans la base de donnée
                    let restaurantCart = items[restaurant]
                    const data = {
                        content : [{ [restaurant] : restaurantCart}],
                        table : req.table,
                        slug : randToken.generate(14)
                    }
                    
                    new facture(data).save()
                    //enlever les items factué du panier
                    Reflect.deleteProperty(sessionCart.items, restaurantName)
                }
            }

            return res.send(`commande ${restaurantName} bien facturer`)
        }
        
    } else return res.send("cart not initialise")

}

export const updatefacture = async (req, res) => {
    const { slug } = req.params
    const updatefacture = await Facture.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updatefacture)
}

export const deletefacture = async (req, res) => {
    const { slug } = req.params
    await Facture.deleteOne({slug: slug})
    return res.status(200).json('facture suprimer')
}

//module de payement avec stripe gérant les cartes bancaires
export const processPayement = async (req, res) => {
    //déclaration des variables
    const stripe = new Stripe(process.env.CLE_SECRETE_STRYPE)
    const { slug } = req.params
    const facture = await Facture.find({ slug })
    if(facture){
        const products = facture.shift().content
        let amount = 0
        let description = ""

        //préparation des informations a envoyer à Stripe
        for(let restaurant in products){
            let restaurants = products[restaurant]
            for(let restaurantName in restaurants){
                let items = restaurants[restaurantName]
                for(let itemId in items){
                    let product = items[itemId]
                    amount += product.item.price
                    description += `X${product.quantity} ${product.item.name}, `
                }
            }
        }
        description.slice(0, description.length - 1)

        //création de l'intention de payement
        const payementIntent = await stripe.paymentIntents.create({
            amount : amount,
            currency : "mga",
            description : description,
            statement_descriptor : `Achat food court `.substring(0, 22),
            metadata : {
                order_uuid : slug
            }
        })

        return res.send({
            clientSecret : payementIntent.client_secret
        })

    } else return res.send("product not found")
}