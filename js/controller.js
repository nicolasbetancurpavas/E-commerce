import { llenarTienda } from "./traversing.js";
import { ampliarInformacionProducto } from "./ampliarInfo.js";

llenarTienda();

let productos = {};

// llamo modal

const modalInformacion = new bootstrap.Modal(document.getElementById("exampleModal"));
const modalResumen = new bootstrap.Modal(document.getElementById("staticBackdrop"));

const contenedorProductos = document.querySelector(".main-productos");

// dectetamos contenedor de todos los productos
// sacamos informacion del contendor en especifico

contenedorProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-btn") || e.target.classList.contains("card-img")) {
    //(al escojer un producto  la (cantidad) se empieza en 0 de nuevo)
    let cantidadProduct = document.getElementById("cantidadProducto");
    cantidadProduct.value = 1;
    // traemos informacion del evento para formar el objecto
    productos = ampliarInformacionProducto(e);
    modalInformacion.show();
  }
});


// rutina para agregar al carrito

const btnAdd = document.getElementById("add");
const capsula = document.querySelector("#contador");
const capsulaMobile = document.querySelector(".contador");
let carrito = [];

btnAdd.addEventListener("click", () => {
  let cantidadProduct = document.getElementById("cantidadProducto").value;
  productos.cantidad = Number(cantidadProduct);
  carrito.push(productos);

  // saco cantidades de cada producto y las sumo
  let cantidades = carrito.map((e) => e.cantidad);
  let suma = cantidades.reduce((prev, next) => prev + next)
  console.log(suma)

  capsula.textContent = suma
  capsulaMobile.textContent = suma
  capsula.classList.remove("invisible")
  capsulaMobile.classList.remove("invisible")
  modalInformacion.hide();

});

// modal compras agregadas
let iconShop = document.getElementById("shop");
console.log(iconShop)

let iconShoping = document.getElementById("shoping")
console.log(iconShoping)

iconShop.addEventListener("click", () => {
  // contenedor base para pintar resumen compra
  let baseResumenCompra = document.querySelector(".container-resumen-compra");
  baseResumenCompra.innerHTML = "";

  // verificamos que haya productos agregados
  let nullProductos = document.querySelector(".NA");
  if (carrito.length === 0) {
    let totalneto = document.querySelector(".productnull");
    nullProductos.classList.remove("desactivar");
    totalneto.textContent = 0;
  }

  if (carrito.length > 0) {
    nullProductos.classList.add("desactivar");
  }

  // pintamos los productos
  carrito.forEach((producto) => {
    let contenedor = document.createElement("div");
    contenedor.classList.add("item-producto-resumen");

    let figure = document.createElement("figure");
    figure.classList.add("figure");

    let img = document.createElement("img");
    img.classList.add("img-resumen-modal");
    img.src = producto.foto;

    let divInformacion = document.createElement("div");
    divInformacion.classList.add("container-info-product");

    let nombre = document.createElement("h2");
    nombre.classList.add("nombre-resumen-modal");
    nombre.textContent = producto.nombre;

    let precioAntes = document.createElement("h5");
    precioAntes.classList.add("precio-antes-resumen-modal");
    precioAntes.textContent = producto.precioAntes;
    if (producto.precioAntes == 0) precioAntes.classList.add("desactivar");

    let precioAhora = document.createElement("h3");
    precioAhora.classList.add("precio-actual-resumen-modal");

    precioAhora.textContent = producto.precioAhora;

    let cantidad = document.createElement("h5");
    cantidad.classList.add("cantidad-resumen-modal");
    cantidad.textContent = `Cantidad: ${producto.cantidad}`;

    let divEnviogratis = document.createElement("div");
    divEnviogratis.classList.add("container-envio-gratis");

    let IconoGratis = document.createElement("i");
    IconoGratis.classList.add("fa-solid");
    IconoGratis.classList.add("fa-truck");

    let envioGratis = document.createElement("p");
    envioGratis.classList.add("envio-gratiss");
    envioGratis.textContent = "envio gratis";

    baseResumenCompra.appendChild(contenedor);
    contenedor.appendChild(figure);
    figure.appendChild(img);
    contenedor.appendChild(divInformacion);
    divInformacion.appendChild(nombre);
    divInformacion.appendChild(precioAntes);
    divInformacion.appendChild(precioAhora);
    divInformacion.appendChild(cantidad);
    divInformacion.appendChild(divEnviogratis);
    divEnviogratis.appendChild(IconoGratis);
    divEnviogratis.appendChild(envioGratis);

    // agrego atributo el subtotal
    producto.subtotal =
      Number(producto.precioAhora) * Number(producto.cantidad);

    // limpiar carrito
    let limpiar = document.querySelector(".limpiar-modal");

    //subtotal para saber total de los productos
    let sub = carrito.map((elemeto) => elemeto.subtotal);
    let TOTAL = sub.reduce((actual, siguiente) => actual + siguiente);

    // sumar catidades para validar si entra en los descuentos
    let cantidades = carrito.map((e) => e.cantidad);
    let suma = cantidades.reduce(
      (indiceActual, indiceSiguiente) => indiceActual + indiceSiguiente
    );

    limpiar.addEventListener("click", () => {
      // borrar informacion carrito y reiniciando valores a 0
      let cantidadProducto = document.querySelector(".productos-res");
      let resultSubtotal = document.querySelector(".result-subtotal");
      let Descuento = document.querySelector(".result-descuento");
      cantidadProducto.classList.add("desactivar");
      resultSubtotal.textContent = 0;
      Descuento.textContent = 0;

      suma = 0;

      //limpiar carrito
      carrito = [];
      capsula.classList.add("invisible");
      capsulaMobile.classList.add("invisible");
      modalResumen.hide();
    });

    // btn calcular compra
    let calcular = document.querySelector(".buy");
    let totalneto = document.querySelector(".productnull");

    //mostra cantidad de productos
    let cantidadProducto = document.querySelector(".productos-res");
    let resultSubtotal = document.querySelector(".result-subtotal");
    let Descuento = document.querySelector(".result-descuento");

    calcular.addEventListener("click", () => {
      if (suma > 0) {
        cantidadProducto.classList.remove("desactivar");
        cantidadProducto.textContent = `(${suma} productos)`;
      }
      // si el carrito se limpio que borre resultados todos se inicia en 0
      if (carrito.length == 0) {
        TOTAL = 0;
      }

      if (suma > 2) {
        let descuentoD = parseInt((TOTAL * 85) / 100);
        let descuento = parseInt((TOTAL * 15) / 100);
        resultSubtotal.textContent = TOTAL;
        totalneto.textContent = `Total compra: ${descuentoD}`;
        Descuento.textContent = `$ ${descuento}`;
      } else {
        resultSubtotal.textContent = `${TOTAL}`;
        totalneto.textContent = `Total compra: ${TOTAL}`;
      }
    });
  });

  modalResumen.show();
});

iconShoping.addEventListener("click", () => {
  // contenedor base para pintar resumen compra
  let baseResumenCompra = document.querySelector(".container-resumen-compra");
  baseResumenCompra.innerHTML = "";

  // verificamos que haya productos agregados
  let nullProductos = document.querySelector(".NA");
  if (carrito.length === 0) {
    let totalneto = document.querySelector(".productnull");
    nullProductos.classList.remove("desactivar");
    totalneto.textContent = 0;
  }

  if (carrito.length > 0) {
    nullProductos.classList.add("desactivar");
  }

  // pintamos los productos
  carrito.forEach((producto) => {
    let contenedor = document.createElement("div");
    contenedor.classList.add("item-producto-resumen");

    let figure = document.createElement("figure");
    figure.classList.add("figure");

    let img = document.createElement("img");
    img.classList.add("img-resumen-modal");
    img.src = producto.foto;

    let divInformacion = document.createElement("div");
    divInformacion.classList.add("container-info-product");

    let nombre = document.createElement("h2");
    nombre.classList.add("nombre-resumen-modal");
    nombre.textContent = producto.nombre;

    let precioAntes = document.createElement("h5");
    precioAntes.classList.add("precio-antes-resumen-modal");
    precioAntes.textContent = producto.precioAntes;
    if (producto.precioAntes == 0) precioAntes.classList.add("desactivar");

    let precioAhora = document.createElement("h3");
    precioAhora.classList.add("precio-actual-resumen-modal");

    precioAhora.textContent = producto.precioAhora;

    let cantidad = document.createElement("h5");
    cantidad.classList.add("cantidad-resumen-modal");
    cantidad.textContent = `Cantidad: ${producto.cantidad}`;

    let divEnviogratis = document.createElement("div");
    divEnviogratis.classList.add("container-envio-gratis");

    let IconoGratis = document.createElement("i");
    IconoGratis.classList.add("fa-solid");
    IconoGratis.classList.add("fa-truck");

    let envioGratis = document.createElement("p");
    envioGratis.classList.add("envio-gratiss");
    envioGratis.textContent = "envio gratis";

    baseResumenCompra.appendChild(contenedor);
    contenedor.appendChild(figure);
    figure.appendChild(img);
    contenedor.appendChild(divInformacion);
    divInformacion.appendChild(nombre);
    divInformacion.appendChild(precioAntes);
    divInformacion.appendChild(precioAhora);
    divInformacion.appendChild(cantidad);
    divInformacion.appendChild(divEnviogratis);
    divEnviogratis.appendChild(IconoGratis);
    divEnviogratis.appendChild(envioGratis);

    // agrego atributo el subtotal
    producto.subtotal =
      Number(producto.precioAhora) * Number(producto.cantidad);

    // limpiar carrito
    let limpiar = document.querySelector(".limpiar-modal");

    //subtotal para saber total de los productos
    let sub = carrito.map((elemeto) => elemeto.subtotal);
    let TOTAL = sub.reduce((actual, siguiente) => actual + siguiente);

    // sumar catidades para validar si entra en los descuentos
    let cantidades = carrito.map((e) => e.cantidad);
    let suma = cantidades.reduce(
      (indiceActual, indiceSiguiente) => indiceActual + indiceSiguiente
    );

    limpiar.addEventListener("click", () => {
      // borrar informacion carrito y reiniciando valores a 0
      let cantidadProducto = document.querySelector(".productos-res");
      let resultSubtotal = document.querySelector(".result-subtotal");
      let Descuento = document.querySelector(".result-descuento");
      cantidadProducto.classList.add("desactivar");
      resultSubtotal.textContent = 0;
      Descuento.textContent = 0;

      suma = 0;

      //limpiar carrito
      carrito = [];
      capsula.classList.add("invisible");
      modalResumen.hide();
    });

    // btn calcular compra
    let calcular = document.querySelector(".buy");
    let totalneto = document.querySelector(".productnull");

    //mostra cantidad de productos
    let cantidadProducto = document.querySelector(".productos-res");
    let resultSubtotal = document.querySelector(".result-subtotal");
    let Descuento = document.querySelector(".result-descuento");

    calcular.addEventListener("click", () => {
      if (suma > 0) {
        cantidadProducto.classList.remove("desactivar");
        cantidadProducto.textContent = `(${suma} productos)`;
      }
      // si el carrito se limpio que borre resultados todos se inicia en 0
      if (carrito.length == 0) {
        TOTAL = 0;
      }

      if (suma > 2) {
        let descuentoD = parseInt((TOTAL * 85) / 100);
        let descuento = parseInt((TOTAL * 15) / 100);
        resultSubtotal.textContent = TOTAL;
        totalneto.textContent = `Total compra: ${descuentoD}`;
        Descuento.textContent = `$ ${descuento}`;
      } else {
        resultSubtotal.textContent = `${TOTAL}`;
        totalneto.textContent = `Total compra: ${TOTAL}`;
      }
    });
  });

  modalResumen.show();
});
