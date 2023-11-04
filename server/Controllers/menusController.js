import Menu from "../Model/menuModel.js";

const getmenus = async (req, res) => {
    const {etablissement} = req.params
    const allmenus = await Menu.find({etablissement : etablissement})
    return res.status(200).json(allmenus)
}

const getmenu = async (req, res) => {
    const { slug } = req.params
    const menu = await Menu.find({slug: slug})
    return res.status(200).json(menu)
}

const createmenu = async (req, res) => {
    var data = {...req.body}
    data.slug = data.name.split(' ').join('-');
    const newmenu = new Menu(data);
    const insertedmenu = await newmenu.save();
    return res.status(201).json(insertedmenu);
}

const updatemenu = async (req, res) => {
    const { slug } = req.params
    const updatemenu = await Menu.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updatemenu)
}

const deletemenu = async (req, res) => {
    const { slug } = req.params
    await Menu.deleteOne({slug: slug})
    return res.status(200).json('menu suprimer')
}

export default {
    getmenus,
    getmenu,
    createmenu,
    updatemenu,
    deletemenu
}