const { Router } = require ('express')
const CartManager = require('../managers/carts.manager')

const router = Router()

router.get ('/', async (req, res) => {
    try {
        const cardNew = await cardService.createCart()
        res.send({status:'success', data: cardNew})

    } catch (error) {
        console.log(error)
    }

})

const cardService = new CartManager()

router.get ('/:cid', async (req, res) => {
    try {
        const cid = Number(req.params.cid)
        const productCarts = await cardService.getCartByID(cid)
        res.send({status:'success', data: productCarts})
        
    } catch (error) {
        console.log(error)
    }

})

router.post ('/:cid/product/:pid', async (req, res) => {
    try {
        const pid = Number(req.params.pid)
        const cid = Number(req.params.cid) 
        const response = await cardService.createProductToCart(cid,pid)
        res.send({status: 'success', data: response})
        
    } catch (error) {
        console.log(error)
    }

})

router.put ('/', async (req, res) => {
    try {
        res.send('put cart')
        
    } catch (error) {
        console.log(error)
    }

})

router.delete ('/', async (req, res) => {
    try {
        res.send('delete cart')
                
    } catch (error) {
        console.log(error)
    }

})

module.exports = router