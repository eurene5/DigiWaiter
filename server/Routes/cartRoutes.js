import express, { json } from "express"
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

routesCart.get('/add/:id', async (req, res) => {
    const productId = req.params.id
    let restaurant = "reghalal"
    let sessionCart = req.session.cart ? req.session.cart : {}
    let cart = new Cart(sessionCart)
    // const product = await Menu.find({slug : productId})

    const product = {
        name : "laoka be",
        price : 20000
    }

    if(product){
        cart.addToCart(productId, restaurant, product)
        req.session.cart = cart
        res.send(req.session.cart)
    } else return res.send("menu not found")
    
})

routesCart.get('/remove/:id', function(req, res, next) {
    let productId = req.params.id
    let cart = new Cart(req.session.cart ? req.session.cart : {})
    let restaurant = {name : "reghalal", img : "banner.png"}
  
    cart.removeToCart(productId, restaurant);
    req.session.cart = cart;
    res.send(req.session.cart)
});

export default routesCart