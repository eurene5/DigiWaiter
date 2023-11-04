import express from "express";
import QRCode from "qrcode";

const routesQR = new express.Router()

routesQR.post('/', (req, res) => {

    if (req.body && req.body.information.length != 0) var information = JSON.stringify(req.body.information)
    else res.send('entrée un text ou une url')

    QRCode.toDataURL(information, (err, src) => {
        if(err) res.send('error occured')
        res.send(`<img src =${src} alt = 'qrcode'/>`)
    })
})

routesQR.post('/scan', (req, res) => {
    //coe pour scanner un QR code
})

export default routesQR