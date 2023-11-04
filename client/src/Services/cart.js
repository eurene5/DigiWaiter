import axios from "axios"

<<<<<<< HEAD
axios.defaults.withCredentials = true

=======
>>>>>>> 16b70c8da9d41fc8dea598305999d7d7d5c66030
/**
 * Add to cart
 * @param {String} slug slug du produit a ajouter au panier
 * @param {String} quantite quantité du produit a acheté
 * @returns 
 */
export function addToCart(slug, quantite) {
    return (new Promise(resolve => {
<<<<<<< HEAD
        axios.get(`http://localhost:8000/api/cart/add/${slug}?quantite=${quantite}`)
=======
        axios.post(`http://localhost:8000/api/cart/add/${slug}?quantite=${quantite}`)
>>>>>>> 16b70c8da9d41fc8dea598305999d7d7d5c66030
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
        axios.get(`http://localhost:8000/api/cart/remove/${slug}?restaurant=${restaurant}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//get tout les éléments du panier
<<<<<<< HEAD
export function getPoductCart() {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/cart`)
        .then(res => res.status === 2000 && res.data)
=======
export function getProductCart() {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/cart`)
        .then(res => res.status === 200 && res.data)
>>>>>>> 16b70c8da9d41fc8dea598305999d7d7d5c66030
        .then(resolve)
        .catch(console.error)
    }))
}