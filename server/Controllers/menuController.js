import Menu from "../Models/menusModel.js"
import { categorieModel } from "../Models/categorieModel.js"
import { restaurantModel } from "../Models/restaurantsModel.js"

export const getmenus = async (req, res) => {
    const {restaurant} = req.params
    const allmenus = await Menu.find({'restaurant.slug' : restaurant})
    return res.status(200).json(allmenus)
}

export const getmenu = async (req, res) => {
    const { slug } = req.params
    const menu = await Menu.find({slug: slug})
    return res.status(200).json(menu)
}

export const getCategorie = async (req, res) => {
    const {restaurant} = req.params
    const categories = await categorieModel.find({"restaurant.slug" : restaurant})
    return res.status(200).json(categories)
}

export const createmenu = async (req, res) => {
    var data = {...req.body}
    const {slug} = req.params
    const restaurant = await restaurantModel.find({slug : slug})

    data.slug = data.name.split(' ').join('-')
    data.restaurant = restaurant
    const newmenu = new Menu(data)
    const insertedmenu = await newmenu.save()
    return res.status(201).json(insertedmenu)
}

export const personnaliseMenu = async (req, res) => {
    var data = {...req.body}
    const { slug } = req.params
    const findMenu = await Menu.find({slug : slug})
    if(findMenu){
        var options = []
        for(let categorie in data.categories) {
            let option = {
                name : categorie.name,
                limite : 1,
                items : categorie.items
            }
            options.push(option)
        }
        const updatemenu = await Menu.updateOne({slug: slug}, {options : options})
        return res.status(200).json(updatemenu)
    }
    else return res.status(404).json("menu not found")  
}

export const updatemenu = async (req, res) => {
    const { slug } = req.params
    const updatemenu = await Menu.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updatemenu)
}

export const deletemenu = async (req, res) => {
    const { slug } = req.params
    await Menu.deleteOne({slug: slug})
    return res.status(200).json('menu suprimer')
}