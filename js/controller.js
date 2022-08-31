const productos = document.querySelector(".main-productos")

productos.addEventListener("click",(e)=>{
    if(e.target.classList.contains("card-btn")){
        console.log("oprimiendo boton")
    }
})