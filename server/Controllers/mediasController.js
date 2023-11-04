import mediaModel from "../Model/mediaModel.js"

const getmedias = async (req, res) => {
    const allmedias = await mediaModel.find()
    return res.status(200).json(allmedias)
}

const getmedia = async (req, res) => {
    const { name } = req.params
    const media = await mediaModel.find({name: name})
    return res.status(200).json(media)
}

const uploadSingleImage = async (req, res) => {
    if (!req.file) {
        res.send("No file upload")
    } else {
        var imgsrc = req.file.filename
        const newmedia = new mediaModel({name : imgsrc});
        const insertedmedia= await newmedia.save();
        return res.status(201).json(insertedmedia);
    }
}

const deleteUploadImage = async (req, res) => {
    const { name } = req.params
    await mediaModel.deleteOne({name: name})
    return res.status(200).json('image supprimer')
}

export default {
    getmedias,
    getmedia,
    uploadSingleImage,
    deleteUploadImage
}  