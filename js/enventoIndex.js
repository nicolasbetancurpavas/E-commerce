
// desktop deplieguie categorias
const categories = document.querySelector(".ctg")
const getCateogories = document.querySelector(".nover")
const openCategories = document.querySelector('.p-c')
const flecha = document.querySelector("#ROTA")
console.log(flecha)

categories.addEventListener("click", () => {
    openCategories.classList.toggle("cambiarcolor")
    flecha.classList.toggle("rota")
    getCateogories.classList.toggle("invisible")
})
