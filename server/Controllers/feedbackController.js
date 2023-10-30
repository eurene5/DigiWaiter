import feedback from "../Models/feedbackModel.js"
import { restaurantModel } from "../Models/restaurantsModel.js"

export const getAllFeedback = async (_, res) => {
    const groupes = await feedback.find()
    res.status(200).send(groupes)
}

export const createFeedback = async (req, res) => {
    let data = {...req.body}
    const { restaurantSlug } = data
    //recherche du retsaurant en question
    const retsaurant = await restaurantModel.findOne({slug : restaurantSlug})
    data.restaurant = retsaurant
    Reflect.deleteProperty(data, "restaurantSlug")
    //insertion dans feedback
    const newFeedback = await new feedback(data)
    newFeedback.save()
    res.status(200).send(newFeedback)
}

export const updateFeedback = async (req, res) => {
    const { slug } = req.params
    const updateFeedback = await feedback.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updateFeedback)
}

export const deleteFeedback = async (req, res) => {
    const { slug } = req.params
    await feedback.deleteOne({slug: slug})
    return res.status(200).json('Feedback suprimer')
}