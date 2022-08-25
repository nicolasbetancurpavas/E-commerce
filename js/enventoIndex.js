const contendorPE = document.querySelector(".sample-productos").children
const contendorImg = contendorPE
console.log()

    for(let i = 0; i<contendorPE.length;i++){
        contendorPE[i].addEventListener("click",()=>{
            contendorImg[i].childNodes[1].style.width = "30%"
        })
    }