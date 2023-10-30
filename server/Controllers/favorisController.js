import favorisModel from "../Models/favorisModel.js"

export const getfavoris = async (req, res) => {
    const slug = req.params
    const favoris = await favorisModel.find({restaurantSlug: slug})
    return res.status(200).send(favoris)
}

export const createFavoris = async (req, res) => {
    const {slug} = req.params
    const favoris = new favorisModel({restaurantSlug : slug})
    await favoris.save()
    return res.status(200).send(favoris)
}

export const updateFavoris = async (req, res) => {
    const slug = req.params
    const data = {... req.body}
    const favoris = await favorisModel.find({restaurantSlug : slug})
    const menu = favoris.menus
    menu.push(data)
    const updateFavoris = await favorisModel.findOneAndUpdate({restaurantSlug : slug}, {menus : menu}, {new : true})

    return res.send(updateFavoris)
}
