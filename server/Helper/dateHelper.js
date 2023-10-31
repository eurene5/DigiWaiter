export const getTodayDate = () => {

    const date = new Date()
    let today = date.getDay()

    switch(today) {
        case 0 : {
            today = "lundi"
            break
        }
        case 1 : {
            today = "mardi"
            break
        }
        case 2 : {
            today = "mercredi"
            break
        }
        case 3 : {
            today = "jeudi"
            break
        }
        case 4 : {
            today = "vendredi"
            break
        }
        case 5 : {
            today = "samedi"
            break
        }
        case 6 : {
            today = "dimanche"
            break
        }
    }

    return today
}

export const getTodayYear = () => {

    const date = new Date()
    let today = date.getFullYear()

    return today
}

export const getDate = () => {
    const date = new Date()
    let today = date.getDate()

    return today
}

export const getTodayMonth = () => {
    const date = new Date()
    let today = date.getMonth()

    switch(today) {
        case 0 : {
            today = "janvier"
            break
        }
        case 1 : {
            today = "fevrier"
            break
        }
        case 2 : {
            today = "mars"
            break
        }
        case 3 : {
            today = "avril"
            break
        }
        case 4 : {
            today = "mai"
            break
        }
        case 5 : {
            today = "juin"
            break
        }
        case 6 : {
            today = "juillet"
            break
        }
        case 7 : 
            today = "aout"
            break
        case 8 : 
            today = "septembre"
            break
        case 9 :
            today = "octobre"
            break
        case 10 :
            today = "novembre"
            break
        case 11 :
            today = "decembre"
            break
    }

    return today
}