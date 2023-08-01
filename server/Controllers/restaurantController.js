import Restaurant from "../Model/restaurantModel.js";

const getRestaurants = async (req, res) => {
    const allRestaurants = await Restaurant.find()
    return res.status(200).json(allRestaurants)
}

const getRestaurant = async (req, res) => {
    const { slug } = req.params
    const restaurant = await Restaurant.find({slug: slug})
    return res.status(200).json(restaurant)
}

const getGroupeRestuarants = async (req, res) => {
    const { groupe } = req.params
    const restaurant = await Restaurant.find({groupe : groupe})
    return res.status(200).json(restaurant)
}

const createRestaurant = async (req, res) => {
    var data = {...req.body}
    data.slug = data.name.split(' ').join('-')
    const newRestaurant = new Restaurant(data);
    const insertedRestaurant = await newRestaurant.save();
    return res.status(201).json(insertedRestaurant);
}

const updateRestaurant = async (req, res) => {
    const { slug } = req.params
    const updateRestaurant = await Restaurant.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updateRestaurant)
}

const deleteRestaurant = async (req, res) => {
    const { slug } = req.params
    await Restaurant.deleteOne({slug: slug})
    return res.status(200).json('restaurant suprimer')
}

export default {
    getRestaurants,
    getRestaurant,
    getGroupeRestuarants,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}