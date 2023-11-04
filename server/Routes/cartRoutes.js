import express, { json } from "express"
import {getRestaurant} from "../Controllers/restaurantController.js"
import Cart from "../Controllers/cartController.js"
import menuModel from "../Models/menusModel.js"

const routesCart = new express.Router()

routesCart.get('/', async (req, res) => {
    let sessionCart = req.session.cart
    if (!sessionCart) {
      return res.send({products: null})
    }
    let cart = new Cart(sessionCart)
    console.log(cart);
    let itemList = cart.getItems()

    let data = {
        itemList : itemList,
        totalItems : cart.totalItems,
        totalPrice : cart.totalPrice
    }
    res.status(200).json(data)
})

routesCart.post('/add/:slug', async (req, res) => {
    const {slug} = req.params
<<<<<<< HEAD
    const {quantite} = req.query
    let sessionCart = req.session.cart ? req.session.cart : {}
    let cart = new Cart(sessionCart)
    const product = await menuModel.findOne({slug : slug})

    if(product){
        const restaurant = product.restaurant
        cart.addToCart(slug, restaurant.name, product, quantite)
        req.session.cart = cart
        req.session.save()
        return res.status(200).json(req.session.cart)
=======
    const { quantite } = req.query
    let sessionCart = req.session.cart ? req.session.cart : {}
    let cart = new Cart(sessionCart)
    const product = await menuModel.findOne({slug : slug})
    const restaurant = product.restaurant
    
    if(product){
        cart.addToCart(slug, restaurant.name, product, quantite)
        req.session.cart = sessionCart
        return res.send(req.session.cart)
>>>>>>> 16b70c8da9d41fc8dea598305999d7d7d5c66030
    } else return res.send("menu not found")
    
})

routesCart.get('/remove/:slug', function(req, res, next) {
    const {slug} = req.params
    let cart = new Cart(req.session.cart ? req.session.cart : {})
    let {restaurant} = req.query
  
    cart.removeToCart(productId, restaurant);
    req.session.cart = cart;
    res.send(req.session.cart)
});

export default routesCart