import mongoose from "mongoose";

const categorieSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    restaurant : {
        type : String,
        required : true
    }
})

const categorie = mongoose.model('categories', categorieSchema)
export default {
    categorie,
    categorieSchema
}