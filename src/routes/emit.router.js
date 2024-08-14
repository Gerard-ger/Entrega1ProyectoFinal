const { Router } = require('express')
const ProductManager = require('../managers/products.managers')


const productsRouter = Router();

export default (io) => {

    productsRouter.post('/', async (req, res) => {

        try {

            const { body } = req
            const response = await productService.addProduct(body)

            // Emitir el evento a todos los clientes conectados

            io.emit('ActualizacionProducto', response);

            res.status(201).send('Producto agregado con éxito.');

        } catch (error) {

            res.status(500).send(error.message);

        }

    });

    return productsRouter;

};