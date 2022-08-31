const contendorPE = document.querySelector(".sample-productos").children
const contendorImg = contendorPE
console.log(contendorPE[0].children)

    for(let i = 0; i<contendorPE.length;i++){
        contendorPE[i].addEventListener("click",()=>{
            contendorImg[i].children[0].style.width = "30%"
            contendorImg[i].children[0].style.transition = "width 1s ease"
        })
    }

// scroll productos oferta
