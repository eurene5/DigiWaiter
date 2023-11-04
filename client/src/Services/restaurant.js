import axios from "axios"

/**
 * //get tout les restaurants liés a un groupe (food court)
 * @param {String} groupe le nom du groupe
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

/**
 * //get un restaurant
 * @param {String} slug slug du restaurant
 * @returns 
 */
export function getRestaurant(slug) {
    return(new Promise(resolve => {
        axios.get(`http://localhost:8000/api/restaurants/single/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//pour créer un restaurant
//http://localhost:8000/api/restaurants/register

/**
 * //definir un admin password
 * @param {String} slug slug du restaurant
 * @returns 
 */
export function definAdminPassword(slug) {
    return(new Promise(resolve => {
        axios.put(`http://localhost:8000/api/restaurants/define-admin-password/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//login
//http://localhost:8000/api/restaurants/login

//register
export function register(data) {
    // console.log(data);
    return(new Promise(resolve => {
        axios
        .post(`http://localhost:8000/api/restaurants/sign-up`, data, {})
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//logout
//http://localhost:8000/api/logout

//forgot password
//http://localhost:8000/api/forgot

/**
 * //supprimer un restaurant
 * @param {String} slug slug du menu
 * @returns 
 */
export function deleteRestaurant(slug) {
    return(new Promise(resolve => {
        axios.put(`http://localhost:8000/api/restaurants/delete/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}
