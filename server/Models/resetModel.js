import mongoose from "mongoose"

const resetSchema = mongoose.Schema({
    mail : {type : String, requiered : true},
    token : {type : String, requiered : true},
    expireIn : {type : Number, requiered : true}
})

const resetModel = new mongoose.model('reset', resetSchema)
export default resetModel