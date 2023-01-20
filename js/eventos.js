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

const iconoflecha = document.getElementById("novieww")
const texto = document.querySelector(".yes-view")
const title = document.querySelector(".title-quienes")
const iconoflechaSample = document.querySelector(".title-quienes")

title.addEventListener("click", () => {
    texto.classList.toggle("activar")
    iconoflecha.classList.toggle("rotaremos")
})

iconoflecha.addEventListener("click", () => {
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


//ocultar filtros

const footer = document.querySelector(".footer")
const filtros = document.querySelector(".filter")
const main = document.querySelector(".container-main-productos")


footer.addEventListener("mousemove", () => {
    filtros.classList.add("invisible")
})

main.addEventListener("mousemove", () => {
    filtros.classList.remove("invisible")
})


// filtros 

const gratis = document.getElementById("gratis")
const color = document.getElementById("color")
const precio = document.getElementById("precio")
const ano = document.getElementById("ano")
const vista = document.querySelector(".escodido")
const gratisE = document.getElementById("gratisN")
const colorE = document.getElementById("colorN")
const precioE = document.getElementById("precioN")
const anoE = document.getElementById("anoN")

gratis.addEventListener("click", () => gratisE.classList.toggle("desactivar"))
color.addEventListener("click", () => colorE.classList.toggle("desactivar"))
precio.addEventListener("click", () => precioE.classList.toggle("desactivar"))
ano.addEventListener("click", () => anoE.classList.toggle("desactivar"))

