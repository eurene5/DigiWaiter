import mongoose from "mongoose";

const avisSchema = mongoose.Schema({
    pseudo : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    stars : {
        type : Number,
        required : true
    }
})

const avis = mongoose.model('avis', avisSchema)
export default avis