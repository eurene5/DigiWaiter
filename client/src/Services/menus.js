import axios from "axios"

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
 * update un menu
 * @param {String} slug 
 * @returns 
 */
export function updateMenu(slug) {
    return (new Promise(resolve => {
        axios.put(`http://localhost:8000/api/menus/update/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

/**
 * delete un menu
 * @param {String} slug 
 * @returns 
 */
export function deleteMenu(slug) {
    return (new Promise(resolve => {
        axios.delete(`http://localhost:8000/api/menus/delete/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//pour créer un menu
/**
 * delete un menu
 * @param {String} slug 
 * @returns 
 */
export function CreateMenu(slug, data) {
    return (new Promise(resolve => {
        axios.post(`http://localhost:8000/api/menus/create/${slug}`, data)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}


//rendre personnalisé un menu normal
//http://localhost:8000/api/menus/create-personnalise/${slug}
