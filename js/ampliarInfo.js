export function ampliarInformacionProducto(e) {

    let productos = {}

    //llenar informacion del producto (saco informacion del evento para llenar el objecto)
    productos.foto = e.target.parentElement.querySelector(".card-img").src
    productos.nombre = e.target.parentElement.querySelector(".card-nombre").textContent
    productos.precioAntes = e.target.parentElement.querySelector(".precio-anterior").textContent
    productos.precioAhora = e.target.parentElement.querySelector(".precio-nuevo").textContent
    console.log(e.target.parentElement)

    // relleno modal (pinto informacion)
    const imagen = document.querySelector(".img-informacion-producto")
    imagen.src = e.target.parentElement.querySelector(".card-img").src

    const nombre = document.querySelector(".nombre-modal")
    nombre.textContent = e.target.parentElement.querySelector(".card-nombre").textContent

    const preciAnterior = document.querySelector(".precio-antes-modal")
    preciAnterior.textContent = e.target.parentElement.querySelector(".precio-anterior").textContent

    const precioNuevo = document.querySelector(".precio-nuevo-modal")
    precioNuevo.textContent = `$ ${e.target.parentElement.querySelector(".precio-nuevo").textContent}`

    const mostrarprecio = document.querySelector(".precio-producto-modal")
    mostrarprecio.textContent = `$ ${e.target.parentElement.querySelector(".precio-nuevo").textContent}`

    // eliminar vista de los elementos sin descuento
    if (preciAnterior.textContent == 0) {
        preciAnterior.style.display = "none"
    }
    if (preciAnterior.textContent > 0) {
        preciAnterior.style.display = "block"
    }

    return productos
}