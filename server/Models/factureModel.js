import mongoose from "mongoose"
import { restaurantShema } from "./restaurantsModel.js"

const factureSchema = mongoose.Schema({
    content : {
        type : Array,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now()
    },
    payer : {
        type : Boolean,
        default : false
    },
    table : {
        type : Number,
        require : true
    },
    slug : {
        type : String,
        required : true
    },
    restaurant : {
        type : restaurantShema
    }
})

const facture = mongoose.model('factures', factureSchema)
export default facture