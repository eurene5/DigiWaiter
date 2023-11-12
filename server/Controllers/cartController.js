const Cart = class {
    constructor(panier) {
        this.items = panier.items || {}
        this.totalItems = panier.totalItems || 0
        this.totalPrice = panier.totalPrice || 0
    }

    getItems() {
        let itemList = {};
    
        for (let restaurantName in this.items) {
            let restaurantCart = []
            let restaurant = this.items[restaurantName]
    
            for(let id in restaurant){
                restaurantCart.push(restaurant[id])
            }
            itemList[restaurantName] = restaurantCart
            console.log(this.items);
        }
        return itemList
    }

    addToCart(id, restaurant, item, quantity = 1) {
        let restaurantItems = this.items[restaurant]
    
        if(!restaurantItems){
            restaurantItems = {}
            this.items[restaurant] = restaurantItems
        }
    
        let cartItem = restaurantItems[id]
        if(!cartItem)
            cartItem = restaurantItems[id] = {item : item, quantity : 0, price : 0} 
        
        if(!cartItem.quantity){
            cartItem.quantity = parseInt(quantity)
        } else {
            cartItem.quantity += parseInt(quantity)
        }
        cartItem.price = parseInt(cartItem.item.price * cartItem.quantity)
        this.totalItems += parseInt(quantity)
        this.totalPrice += parseInt(cartItem.item.price)
        return this.items
    }

    removeToCart(id, restaurant) {
        const restaurantName = this.items[restaurant]
        if(restaurantName) {
            if(restaurantName[id]) {
                this.totalItems -= restaurantName[id].quantity
                this.totalPrice -= restaurantName[id].price
                delete restaurantName[id]
                return this.items
            } else return "product not found"
        } else return "product not found"
    }
}

export default Cart