import axios from "axios";

//get tout les restaurant lié a un groupe (food court)
export function getGroupeRestaurant(groupe) {
    return(new Promise(resolve => {
        axios.get(`http://localhost:8000/api/restaurants/${groupe}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//get tout les menus d'un restaurant
export function getMenuForOneRestaurant(restaurant) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/menus/restaurant/${restaurant}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//get la liste des catégories des menus d'un restaurant
export function getCategorieMenu(restaurant) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/menus/categories/${restaurant}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//get single menu
export function getSingleMenu(slug) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/Menus/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//add to cart
export function addToCart(slug, restaurant) {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/cart/add/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//delete to cart
export function deleteToCart(slug, restaurant) {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/cart/remove/${slug}?restaurant=${restaurant}`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//get tout les éléments du panier
export function getPoductCart(slug) {
    return (new promise(resolve => {
        axios.get(`http://localhost:8000/api/cart/`)
        .then(res => res.status === 2000 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

