const { Router } = require('express')
const ProductManager = require('../managers/products.managers.js')

//const router = Router()

const productService = new ProductManager()

module.exports = (router, io) => {

io.on('connection', (socket) => {
    socket.emit('updateProducts', products);
});

router.get('/', (req, res) => {

    res.render('realTimeProducts', {
        title: '2da Entrega - Realtime Product',
    })
})

router.post('/', async (req, res) => {
    try {
        const { body } = req
        const response = await productService.addProduct(body)
        io.emit('updateProducts', response);
        res.send({ status: 'success', data: response })

    } catch (error) {
        console.log(error)
    }

})

router.put('/:pid', async (req, res) => {
    try {
        const body = req.body
        const pid = Number(req.params.pid)
        const response = await productService.updateProduct(pid, body)
        io.emit('updateProducts', response);
        res.send({ status: 'success', data: response })

    } catch (error) {
        console.log(error)
    }

})

router.delete('/:pid', async (req, res) => {
    try {
        const pid = Number(req.params.pid)
        const response = await productService.deleteProduct(pid)
        io.emit('updateProducts', response);
        res.send({ status: 'success', data: response })
    } catch (error) {
        console.log(error)
    }

})

}