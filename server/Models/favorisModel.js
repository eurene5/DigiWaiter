import mongoose from "mongoose"

const menuShema = mongoose.Schema({
    name : {type : String, required : true, default : ""},
    slug : {type : String, required : true, default : ""},
    stat : {type : String, default : 0}
})

const favorisSchema = mongoose.Schema({
    restaurantSlug : {type : String, required : true},
    menus : [{type : menuShema, default : () => ({})}]
})

const favorisModel = new mongoose.model("favoris", favorisSchema)
export default favorisModel