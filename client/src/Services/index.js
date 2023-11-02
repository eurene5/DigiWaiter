import axios from "axios"

//Restaurant et menu

/**
 * //get tout les restaurant lié a un groupe (food court)
 * @param {String} groupe 
 * @returns 
 */
export function getGroupeRestaurant(groupe) {
    return(new Promise(resolve => {
        axios.get(`http://localhost:8000/api/restaurants/${groupe}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

export function createRestaurant() {
    return(new Promise(resolve => {
        axios.post(`http://localhost:8000/api/restaurants/sign-up`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}


/**
 * get tout les menus d'un restaurant
 * @param {String} restaurantslug slug du restaurant
 * @returns 
 */
export function getMenuForOneRestaurant(restaurant) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/menus/restaurant/${restaurant}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

/**
 * get la liste des catégories des menus d'un restaurant
 * @param {String} restaurant slug du restaurant
 * @returns 
 */
export function getCategorieMenu(restaurant) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/menus/categories/${restaurant}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

/**
 * get single menu
 * @param {String} slug slug du produit
 * @returns 
 */
export function getSingleMenu(slug) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/Menus/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//Panier

/**
 * Add to cart
 * @param {String} slug slug du produit a ajouter au panier
 * @returns 
 */
export function addToCart(slug) {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/cart/add/${slug}`)
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
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/cart/remove/${slug}?restaurant=${restaurant}`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//get tout les éléments du panier
export function getPoductCart() {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/cart/`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//Facture

/**
 * Creation de facture quand on appuie sur le boutton commandé
 * @param {String} restaurantName "All" si l'utilisateur appue sur tout commander si non ce sera le nom du restaurant
 * @returns 
 */
export function createFacture(restaurantName) {
    return (new promise(resolve => {
        axios.post(`http://localhost:8000/api/factures/create?restaurantName=${restaurantName}`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

/**
 * get la facture du client
 * @returns 
 */
export function getFacture() {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/factures/`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

/**
 * creation de l'intention de payement quand le client clique sur le boutton "payer la facture"
 * @returns 
 */
export function createPaimentIntent() {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/factures/paiement`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//Avis

/**
 * get all feedback pour un restaurant (avis)
 * @param {String} slug slug du restaurant 
 * @returns 
 */
export function getFeedback (slug) {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/feedback/${slug}`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

/**
 * creation d'un avis sur un restaurant
 * @param {String} slug slug du restaurant
 * @returns 
 */
export function createFeedback (slug) {
    return (new promise(resolve => {
        axios.post(`http://localhost:8000/api/feedback/create/${slug}`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}