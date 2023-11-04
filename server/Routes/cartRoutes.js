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
    res.send(data)
})

routesCart.post('/add/:slug', async (req, res) => {
    const {slug} = req.params
    const { quantite } = req.query
    let sessionCart = req.session.cart ? req.session.cart : {}
    let cart = new Cart(sessionCart)
    const product = await menuModel.findOne({slug : slug})
    const restaurant = product.restaurant
    
    if(product){
        cart.addToCart(slug, restaurant.name, product, quantite)
        req.session.cart = sessionCart
        return res.send(req.session.cart)
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