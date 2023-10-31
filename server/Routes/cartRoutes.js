import express, { json } from "express"
import {getRestaurant} from "../Controllers/restaurantController.js"
import Cart from "../Controllers/cartController.js"

const routesCart = new express.Router()

routesCart.get('/', async (req, res) => {
    let sessionCart = req.session.cart
    if (!sessionCart) {
      return res.send({products: null})
    }
    let cart = new Cart(sessionCart)
    let itemList = cart.getItems()
    
    let data = {
        itemList : itemList,
        totalItems : cart.totalItems,
        totalPrice : cart.totalPrice
    }
    res.send(data)
})

routesCart.get('/add/:slug', async (req, res) => {
    const {slug} = req.params
    let sessionCart = req.session.cart ? req.session.cart : {}
    let cart = new Cart(sessionCart)
    const product = await Menu.find({slug : slug})
    const restaurant = product[restaurant]


    if(product){
        cart.addToCart(slug, restaurant.name, product)
        req.session.cart = cart
        res.send(req.session.cart)
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