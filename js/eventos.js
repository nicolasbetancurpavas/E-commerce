// evento para ocultar wpp
const icono = document.querySelector(".fa-xmark")
const contenedorWpp = document.querySelector(".container-wpp")

icono.addEventListener("click",()=>{
    contenedorWpp.style.display= "none"
    setTimeout(()=>{
        contenedorWpp.style.display = "flex"
    },5000)
})

// evento para mostra quienes somos

const iconoflecha = document.getElementById("noview")
const texto = document.querySelector(".yes-view")
const title = document.querySelector(".title-quienes")
const iconoflechaSample = document.querySelector(".title-quienes")

title.addEventListener("click",()=> {
    texto.classList.toggle("activar")
    iconoflecha.classList.toggle("rotaremos")
})


//TRAVERSIN pintaremos la tienda



