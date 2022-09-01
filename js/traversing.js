// BD
function llenarTienda() {

    const BD = [
        { nombre: "Freidora De Aire Caliente Nuo Home 2 Litro", priceBefore: 219950, newprice: 159950, color: "negro", estado: "disponible", descuento: 20, img: "../img/Freidora-sku.webp" },
        { nombre: "Freidora De Aire Digital Nuo Home 3.2 Litros Negra", priceBefore: 339950, newprice: 249950, color: "negro", estado: "disponible", descuento: 26, img: "../img/freidora-de-aire-digital-nuo-home-3.2-litros-negra-1.webp" },
        { nombre: "Freidora de Aire Digital 4 Litros Oster 2129371 Negro", priceBefore: 0, newprice: 339950, color: "negro", estado: "disponible", descuento: 0, img: "../img/freidora-de-aire-digital-4-litros-oster-2129371-negro-1.webp" },
        { nombre: "Freidora De Aire Extra Grand Black + Decker 5 Litros Hf5005B", priceBefore: 619950, newprice: 433950, color: "negro", estado: "disponible", descuento: 30, img: "../img/freidora-de-aire-digital-4-litros-oster-2129371-negro-1.webp" },
        { nombre: "Freidora De Aire Saludable Extra Grande 3.5 Litros Black + Decker Hf3003W", priceBefore: 0, newprice: 509950, color: "blanco", estado: "disponible", descuento: 0, img: "../img/freidora-de-aire-saludable-extra-grande-3.5-litros-black-+-decker-hf3003w-1.webp" },
        { nombre: "Freidora aire nuo home 3.2 lt digital negra gratis cuchara expressions", priceBefore: 0, newprice: 249950, color: "negro", estado: "disponible", descuento: 0, img: "../img/freidora-aire-nuo-home-3.2-lt-digital-negra-gratis-cuchara-expressions-1.webp" },
        { nombre: "Freidora Aire Oster 9 Lt Digital Negra Plateada Diamond Force 2162654", priceBefore: 0, newprice: 659950, color: "acero", estado: "disponible", descuento: 0, img: "../img/freidora-aire-oster-9-lt-digital-negra-plateada-diamond-force-2162654-2.webp" },
        { nombre: "Freidora Aire Oster 6.8 Lt Negra Plateada Diamond Force 2168192", priceBefore: 0, newprice: 589950, color: "acero", estado: "disponible", descuento: 0, img: "../img/freidora-aire-oster-6.8-lt-negra-plateada-diamond-force-2168192-2.webp" },
        { nombre: "Freidora Aire Hamilton Beach 2,5 Lt Digital Negra", priceBefore: 0, newprice: 419950, color: "negro", estado: "disponible", descuento: 0, img: "../img/freidora-aire-hamilton-beach-2,5-lt-digital-negra-1.webp" },
        { nombre: "Freidora De Aire Oster 1.8 Litros Digital", priceBefore: 0, newprice: 292950, color: "negro", estado: "disponible", descuento: 0, img: "../img/freidora-de-aire-oster-1.8-litros-digital-1.webp" },
        { nombre: "Freidora aire b+d 5.7 lt hf5055b", priceBefore: 0, newprice: 619950, color: "negro", estado: "disponible", descuento: 0, img: "../img/freidora-aire-b+d-5.7-lt-hf5055b-1.webp" },
        { nombre: "Freidora De Aire Oster 1.8 Litros Digital", priceBefore: 710550, newprice: 426450, color: "negro", estado: "disponible", descuento: 40, img: "../img/freidora-ciclofry-black-&-decker-1.webp" },
        { nombre: "Freidora Aire Haceb 3.5 Lt Negra 9002528", priceBefore: 0, newprice: 354950, color: "negro", estado: "disponible", descuento: 0, img: "../img/freidora-aire-haceb-3.5-lt-negra-9002528-1.webp" },
        { nombre: "Freidora aire kalorik 4.2 lt digital negra", priceBefore: 339950, newprice: 329950, color: "negro", estado: "disponible", descuento: 2, img: "../img/freidora-aire-kalorik-4.2-lt-digital-negra-1.webp" },
        { nombre: "Freidora De Aire Imusa 4.2 Lt Grill 2En1 Acero Inox", priceBefore: 539950, newprice: 499950, color: "acero", estado: "disponible", descuento: 7, img: "../img/freidora-de-aire-imusa-4.2-lt-grill-2en1-acero-inox-1.webp" },
        { nombre: "Freidora Aire Imusa 5.6 Lt Digital Negra Easy Fry Xxl 1510001832", priceBefore: 684950, newprice: 549950, color: "negro", estado: "disponible", descuento: 19, img: "../img/freidora-aire-imusa--5.6-lt-digital-negra-easy-fry-xxl-1510001832-1.webp" },
        { nombre: "Freidora De Aire Philips 2.5 Lt Manual Essential", priceBefore: 599950, newprice: 491850, color: "negro", estado: "disponible", descuento: 18, img: "../img/freidora-de-aire-philips-2.5-lt-manual-essential-1.webp" },
        { nombre: "Freidora aire ultra digital imusa 4.2 lt 7211004637", priceBefore: 0, newprice: 349950, color: "gris", estado: "disponible", descuento: 0, img: "../img/freidora-aire-ultra-digital-imusa-4.2-lt-7211004637-1.webp" },
    ]


    //traversing

    //base
    const mainProduct = document.querySelector(".main-productos")
    console.log(mainProduct)

    //pintamos la bd
     BD.forEach((producto) => {

        const contenedorCard = document.createElement("div")
        contenedorCard.classList.add("container-card")

        const etiqueta = document.createElement("p")
        etiqueta.textContent = `-${producto.descuento}%`
        etiqueta.classList.add("etiqueta-descuento")

        const imagen = document.createElement("img")
        imagen.classList.add("card-img")
        imagen.src = producto.img

        const descripcion = document.createElement("p")
        descripcion.classList.add("card-nombre")
        descripcion.textContent = producto.nombre

        const priceBefore = document.createElement("p")
        priceBefore.classList.add("precio-anterior")
        priceBefore.textContent = producto.priceBefore

        const priceNew = document.createElement("h2")
        priceNew.classList.add("precio-nuevo")
        priceNew.textContent = producto.newprice

        const estado = document.createElement("p")
        estado.classList.add("estado")
        estado.textContent = producto.estado

        const btn = document.createElement("button")
        btn.classList.add("card-btn")
        btn.textContent = "ver Mas"

        if (producto.descuento == 0) {
            priceBefore.style.display = "none"
            estado.style.marginBottom = "20px"
            priceNew.style.marginTop = "20px"
            etiqueta.style.display = "none"
        }


        mainProduct.appendChild(contenedorCard)
        contenedorCard.appendChild(etiqueta)
        contenedorCard.appendChild(imagen)
        contenedorCard.appendChild(descripcion)
        contenedorCard.appendChild(priceBefore)
        contenedorCard.appendChild(priceNew)
        contenedorCard.appendChild(estado)
        contenedorCard.appendChild(btn)
    })

}

export default llenarTienda
