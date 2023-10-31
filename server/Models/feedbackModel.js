import mongoose from "mongoose"
import { restaurantShema } from "./restaurantsModel.js"

const avisSchema = mongoose.Schema({
    pseudo : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    stars : {
        type : Number,
        required : true,
        default : 0
    },
    restaurant : {
        type : restaurantShema
    }
})

const avis = mongoose.model('feedback', avisSchema)
export default avis