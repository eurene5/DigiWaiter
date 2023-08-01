const Cart = (cart) => {
    this.items = cart.items || {}
    this.totalItems = cart.totalItems || 0
    this.totalPrice = cart.totalPrice || 0

    this.add = (item, id) => {
        var cartItem = this.items[id]
        if(!cartItem)
            cartItem = this.items[id] = {item : item, quantity : 0, price : 0}
        cartItem.quantity ++
        cartItem.price = cartItem.item.price * cartItem.quantity
        this.totalItems++
        this.totalPrice += cartItem.item.price
    }

    this.remove = (id) => {
        this.totalItems -= this.items[id].quantity
        this.totalPrice -= this.items[id].price
        delete this.items[id]
    }

    this.getItems = () => {
        var itemList = [];
        for (var id in this.items) {
            itemList.push(this.items[id])
        }
        return itemList
    };
}

export default Cart