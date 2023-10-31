import mongoose from "mongoose"

export const groupeShema = mongoose.Schema({
    name : {type : String, requiered : true, trim : true}
})

export const groupeModel = mongoose.model("groupes", groupeShema)