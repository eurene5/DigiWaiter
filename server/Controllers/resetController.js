import resetModel from "../Models/resetModel.js"

export const getPasswordResetToken = async (token) => {
    const passwordToken = await resetModel.findOne({token : token, expireIn : {$gt : Date.now()}})
    return passwordToken
}

export const createPasswordResetToken = async (data) => {
    const resetPasswordToken = new resetModel(data)
    await resetPasswordToken.save()
    return resetPasswordToken
}

export const deletePasswordResetToken = async (token) => {
    const resetPasswordToken = await resetModel.deleteOne({token : token})
    return resetPasswordToken
}