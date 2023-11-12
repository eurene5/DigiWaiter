import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    content : {
        type : Array,
        required : true
    },
    date : {
        type : Date,
        required : true
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
    }
})

const order = mongoose.model('orders', orderSchema)
export default order