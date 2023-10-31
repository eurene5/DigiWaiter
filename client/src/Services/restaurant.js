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
        axios.put(`http://localhost:8000/api/define-admin-password/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

//login
//http://localhost:8000/api/login

//register
//http://localhost:8000/api/sign-up

//logout
//http://localhost:8000/api/logout

//forgot password
//http://localhost:8000/api/forgot

/**
 * //supprimer un restaurant
 * @param {String} slug slug du restaurant
 * @returns 
 */
export function definAdminPassword(slug) {
    return(new Promise(resolve => {
        axios.put(`http://localhost:8000/api/delete/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}
