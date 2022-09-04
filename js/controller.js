import { llenarTienda } from "./traversing.js"
import { ampliarInformacionProducto } from "./ampliarInfo.js"

llenarTienda()

let productos = {}

// llamo modal

const modalInformacion = new bootstrap.Modal(document.getElementById("exampleModal"))

const contenedorProductos = document.querySelector(".main-productos")

// dectetamos contenedor de todos los productos
// sacamos informacion del contendor en especifico 

let URLactual = window.location

contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-btn") || e.target.classList.contains("card-img")) {
        // valor cantidad vuelve a 1 
        let cantidadProduct = document.getElementById("cantidadProducto")
        cantidadProduct.value = 1
        // traemos informacion del evento para formar el objecto
        productos = ampliarInformacionProducto(e)
        modalInformacion.show()
    }
})


// rutina para agregar al carrito

const btnAdd = document.getElementById("add")
const capsula = document.querySelector(".contador")
let carrito = []

btnAdd.addEventListener("click", () => {
    let cantidadProduct = document.getElementById("cantidadProducto").value

    productos.cantidad = Number(cantidadProduct)
    carrito.push(productos)

    let cantidades = carrito.map((e)=>e.cantidad)
    let suma = cantidades.reduce((indiceActual,indiceSiguiente)=>indiceActual + indiceSiguiente)
    
    capsula.textContent = suma
    capsula.classList.remove("invisible") 

    modalInformacion.hide() 
})





