
// desktop deplieguie categorias
const categories = document.querySelector(".ctg")
const getCateogories = document.querySelector(".nover")
const flecha = document.querySelector("#ROTA")
console.log(flecha)

categories.addEventListener("click", () => {
    flecha.classList.toggle("rota")
    getCateogories.classList.toggle("invisible")
})
