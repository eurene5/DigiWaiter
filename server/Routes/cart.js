import Cart from "../Controllers/cartController.js"
import express from "express"

const routesCart = new express.Router()

routesCart.get('/', function(req, res, next) {
    if (!req.session.cart) {
      return res.send({products: null})
    }
    var cart = new Cart(req.session.cart)
    res.send({
      products: cart.getItems(),
      totalPrice: cart.totalPrice
    })
})

routesCart.get('/add/:id', function(req, res, next) {
    var productId = req.params.id
    var cart = new Cart(req.session.cart ? req.session.cart : {})
    var product = Menu.find({slug : productId})
    cart.add(product, productId)
    req.session.cart = cart
    res.redirect('/api/menus')
})

routesCart.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
  
    cart.remove(productId);
    req.session.cart = cart;
    res.redirect('/');
});

export default routesCart