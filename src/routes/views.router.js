const { Router } = require('express')
const ProductManager = require('../managers/products.managers')

const router = Router()

const productService = new ProductManager()


router.get('/home', async (req, res)=>{
    try {
        const productDb = await productService.getProduct()
        res.render('home', {
            title: '2da Entrega',
            products: productDb
        })
        
    } catch (error) {
        console.log(error)
    }    
})





module.exports = router