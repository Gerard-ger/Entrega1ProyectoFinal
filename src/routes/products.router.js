const { Router } = require('express')
const ProductManager = require('../managers/products.managers')

const router = Router()



const productService = new ProductManager()

router.get('/', async (req, res) => {
    try {
        const productDb = await productService.getProduct()
        res.send({ status: 'success', data: productDb })

    } catch (error) {
        console.log(error)
    }

})

router.get('/:pid', async (req, res) => {
    try {
        const pid = Number(req.params.pid)
        const productID = await productService.getProductById(pid)
        res.send({ status: 'success', data: productID })

    } catch (error) {
        console.log(error)
    }

})

router.post('/', async (req, res) => {
    try {
        const { body } = req
        const response = await productService.addProduct(body)
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
        res.send({ status: 'success', data: response })

    } catch (error) {
        console.log(error)
    }

})

router.delete('/:pid', async (req, res) => {
    try {
        const pid = Number(req.params.pid)
        const response = await productService.deleteProduct(pid)
        res.send({ status: 'success', data: response })
    } catch (error) {
        console.log(error)
    }

})



module.exports = router