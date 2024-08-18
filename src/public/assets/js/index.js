const socket = io()

socket.on('updateProducts', products =>{
   // console.log(products)
    const productListDiv = document.querySelector('#product-list')
    let html = ''

    products.forEach(product => {
        html += `
            <div class='card w-25'>
                <img src='${product.thumbnail}' class='card-image-top'>

                <div class='card-body'>
                    <h5 class='card-title'>${product.title}</h5>
                    <p class='card-text'>Descripcion: ${product.description}</p>
                    <p class='card-text'>Codigo: ${product.code}</p>
                    <p class='card-text'>Precio: ${product.price}</p>
                    <p class='card-text'>Status: ${product.status}</p>
                    <p class='card-text'>Stock: ${product.stock}</p>
                    <p class='card-text'>Categoria: ${product.category}</p>
                    <p class='card-text'>ID: ${product.id}</p>
                </div>
                <div class='card-footer'>
                    <button class='btn btn-outline-dark w-100'>Eliminar</button>
                </div>
            </div>                
        `
        productListDiv.innerHTML = html
    })

    let form = document.querySelector('#products-list')

    form.addEventListener('submit', evt => {
        evt.preventDefault()

        const title = form.elements.title.value
        const description = form.elements.description.value
        const code = Number(form.elements.code.value)
        const price = Number(form.elements.price.value)
        const status = form.elements.status.value
        const stock = Number(form.elements.stock.value)
        const category = form.elements.category.value
        const thumbnail = form.elements.thumbnail.value

        const nuevoProduct = {title, description, code, price, status, stock, category, thumbnail}
        
        socket.emit('addProduct', nuevoProduct )

       // form.reset()

    })
    
})
