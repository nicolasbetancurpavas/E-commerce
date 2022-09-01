import llenarTienda from "./traversing.js"
import { ampliarInformacionProducto } from "./ampliarInfo.js"

llenarTienda()

let productos = {}

// llamo modal

const modalInformacion = new bootstrap.Modal(document.getElementById("exampleModal"))

const contenedorProductos = document.querySelector(".main-productos")

// dectetamos contenedor de todos los productos
// sacamos informacion del contendor en especifico 

contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-btn")) {
        productos = ampliarInformacionProducto(e)
        modalInformacion.show()
    }
})



