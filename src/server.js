const express = require('express')
const productRouter = require('./routes/products.router.js')
const cartRouter = require('./routes/carts.router.js')
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/views.router.js')
const { Server} = require('socket.io')
 
const app = express()
const PORT = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/static', express.static(__dirname + '/public'))

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/', viewsRouter)

//configuracion de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Configuración del socket.io
const httpServer = app.listen(PORT, () => {console.log('escuchando en el puerto: ', PORT)})
const io = new Server(httpServer)
io.on('connection', (socket) => {
    console.log('nuevo cliente conectado')
    
})



