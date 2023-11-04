import express from "express"
import {
    getmenu,
    getmenus,
    updatemenu,
    personnaliseMenu,
    getCategorie,
    createmenu,
    deletemenu,
    searchMenu } from "../Controllers/menuController.js"
import multer from 'multer'



    const storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, '../client/public/upload')
        },
        filename: (req, file, callBack) => {
            callBack(null, file.fieldname + Date.now() + path.extname(file.originalname))
        }
    })
    
    const upload = multer({
        storage: storage
    })
    

const routesmenu = new express.Router()

routesmenu.get('/restaurant/:restaurant', getmenus)
routesmenu.get('/:slug', getmenu)
routesmenu.get('/', searchMenu)
routesmenu.get('/categories/:restaurant', getCategorie)
routesmenu.post('/create/:slug', upload.single("image"), createmenu)
routesmenu.post('/create-personnalise/:slug', personnaliseMenu)
routesmenu.put('/update/:slug', updatemenu)
routesmenu.delete('/delete/:slug', deletemenu)

export default routesmenu