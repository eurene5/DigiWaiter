import axios from "axios"

/**
 * Add to cart
 * @param {String} slug slug du produit a ajouter au panier
 * @param {String} quantite quantité du produit a acheté
 * @returns 
 */
export function addToCart(post) {
    return (new Promise(resolve => {
        axios.post(`http://localhost:8000/api/cart/add/`,post ,{withCredentials : true})
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

/**
 * delete to cart
 * @param {String} slug slug du produit a retirer du panier
 * @param {String} restaurant le nom du restaurant où le produit a été commander
 * @returns 
 */
export function removeToCart(slug, restaurant) {
    return (new Promise(resolve => {
        // ${slug}?restaurant=${restaurant}
        axios.delete(`http://localhost:8000/api/cart/remove/`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//get tout les éléments du panier
export function getPoductCart() {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/cart`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}