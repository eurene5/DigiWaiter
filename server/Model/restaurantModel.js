import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    mail : {
        type : String,
        required : true
    },
    tel : {
        type : Number,
        required : true
    },
    slug : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    note : {
        type : Number,
        default : 0,
        required : false
    },
    medias : {
        type :  String,
        require : true
    },
    groupe : {
        type : String,
        require : true
    }
})

const Restaurant = mongoose.model('restaurants', restaurantSchema)
export default Restaurant