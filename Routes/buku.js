const bukuRoute = require('express').Router()
const {BukuController} = require('../Controller')


bukuRoute.get('/', BukuController.getData)
bukuRoute.get('/read', BukuController.readData)
bukuRoute.post('/add', BukuController.addData)
bukuRoute.get('/create', BukuController.createData)
bukuRoute.get('/update/:id',BukuController.updatepage)
bukuRoute.post('/update/:id',BukuController.updateData)
bukuRoute.get('/delete/:id',BukuController.deleteData)





module.exports = bukuRoute