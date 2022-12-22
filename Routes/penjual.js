const penjualRoute = require('express').Router()
const {PenjualController} = require('../controller')

penjualRoute.get('/', PenjualController.getData)
penjualRoute.get('/read', PenjualController.readData)
penjualRoute.post('/add', PenjualController.addData)
penjualRoute.get('/create', PenjualController.createData)
penjualRoute.get('/update/:id',PenjualController.updatepage)
penjualRoute.post('/update/:id',PenjualController.updateData)
penjualRoute.get('/delete/:id',PenjualController.deleteData)


module.exports = penjualRoute