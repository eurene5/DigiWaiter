import { groupeModel } from "../Models/groupeModel.js"

export const getAllGroupe = async (_, res) => {
    const groupes = await groupeModel.find()
    res.status(200).send(groupes)
}

export const getGroupe = async (req, res) => {
    const { name } = req.params
    const groupe = await groupeModel.find({name : name})
    res.status(200).send(groupe)
}

export const createGroupe = async (req, res) => {
    const data = {...req.body}
    const newGroupe = await new groupeModel(data)
    newGroupe.save()
    res.status(200).send(newGroupe)
}

export const updateGroupe = async (req, res) => {
    const { slug } = req.params
    const updateGroupe = await groupeModel.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updateGroupe)
}

export const deleteGroupe = async (req, res) => {
    const { slug } = req.params
    await groupeModel.deleteOne({slug: slug})
    return res.status(200).json('groupe suprimer')
}