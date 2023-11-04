import multer from "multer"
import path from "path"
import express from "express"
import mediasController from "../Controllers/mediasController.js";

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../Client/public/upload')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

const {
    getmedias,
    getmedia,
    uploadSingleImage,
    deleteUploadImage
} = mediasController

const routesMedias = new express.Router()

routesMedias.get('/', getmedias)
routesMedias.get('/:name', getmedia)
routesMedias.post('/', upload.single('image'), uploadSingleImage)
routesMedias.delete('/:name', deleteUploadImage)

export default routesMedias

