import Order from "../Model/orderModel.js";

const getorders = async (req, res) => {
    const allorders = await Order.find()
    return res.status(200).json(allorders)
}

const getorder = async (req, res) => {
    const { slug } = req.params
    const order = await Order.find({slug: slug})
    return res.status(200).json(order)
}

const createorder = async (req, res) => {
    const neworder = new Order({ ...req.body });
    const insertedorder = await neworder.save();
    return res.status(201).json(insertedorder);
}

const updateorder = async (req, res) => {
    const { slug } = req.params
    const updateorder = await Order.findOneAndUpdate({slug: slug}, {...req.body}, {new: true})
    return res.status(200).json(updateorder)
}

const deleteorder = async (req, res) => {
    const { slug } = req.params
    await Order.deleteOne({slug: slug})
    return res.status(200).json('order suprimer')
}

export default {
    getorders,
    getorder,
    createorder,
    updateorder,
    deleteorder
}