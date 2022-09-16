// evento para ocultar wpp
const icono = document.querySelector(".wpp")
const contenedorWpp = document.querySelector(".container-wpp")
console.log(icono)
icono.addEventListener("click", () => {
    contenedorWpp.style.display = "none"
    setTimeout(() => {
        contenedorWpp.style.display = "flex"
    }, 5000)
})

// evento para mostra quienes somos

const iconoflecha = document.getElementById("noview")
const texto = document.querySelector(".yes-view")
const title = document.querySelector(".title-quienes")
const iconoflechaSample = document.querySelector(".title-quienes")

title.addEventListener("click", () => {
    texto.classList.toggle("activar")
    iconoflecha.classList.toggle("rotaremos")
})

let arrowGet = document.getElementById("noview")
arrowGet.addEventListener("click", () => {
    texto.classList.toggle("activar")
    iconoflecha.classList.toggle("rotaremos")
})

//abrir soporte
const cerrar = document.getElementById("btnclose")
const boton = document.querySelector(".btn-send-form")
const vistaSopport = document.querySelector(".support")
const iconoSupport = document.querySelector("#support")

//abrir vista
iconoSupport.addEventListener("click", () => {
    vistaSopport.classList.toggle("activar")
})
// cerrar vista desde el icono cerrar
cerrar.addEventListener("click", () => {
    vistaSopport.classList.toggle("activar")
})







