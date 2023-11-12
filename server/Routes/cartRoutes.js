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

routesCart.post('/add', async (req, res) => {
    const data = {...req.body}
    let sessionCart = req.session.cart ? req.session.cart : {}
    let cart = new Cart(sessionCart)
    const product = await menuModel.findOne({slug : data.slug})

    if(product){
        const restaurant = product.restaurant
        cart.addToCart(data.slug, restaurant.name, product, data.quantite)
        req.session.cart = cart
        req.session.save((err) => {
            if (err) {
              console.error(err);
            } else {
              return res.status(200).json(req.session.cart);
            }
          })
       
    } else return res.send("menu not found")
    
})

routesCart.delete('/remove', function(req, res, next) {
    const data = {...req.body}
    let cart = new Cart(req.session.cart ? req.session.cart : {})
  
    cart.removeToCart(data.slug, data.restaurant);
    req.session.cart = cart;
    res.send(req.session.cart)
});

export default routesCart