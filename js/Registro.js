import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const btnRegister = document.getElementById("register");
//modal
const modalAutenticacion = new bootstrap.Modal(document.getElementById("exampleModalCenter"));

btnRegister.addEventListener("click", () => {
  const auth = getAuth();

  const email = document.getElementById("correo").value;
  const password = document.getElementById("contrase").value;
  const textAutenticacion = document.querySelector(".text-autintication")
  const simbol = document.querySelector(".aut")

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.operationType; // este atributo verifica si se registro
      if (user == "signIn") {
        simbol.classList.add("fa-solid")
        simbol.classList.add("fa-check")
        textAutenticacion.textContent = "Te registraste correctamente"
      }
      modalAutenticacion.show()
      setTimeout(() => modalAutenticacion.hide(), 3000)
      console.log(user)

    })

    .catch((error) => {
      const errorCode = error.code;
      //error email
      if (errorCode == "auth/invalid-email") {
        simbol.classList.add("fa-solid")
        simbol.classList.add("fa-circle-xmark")
        textAutenticacion.textContent = "Error email"
      }
      //error contra
      if (errorCode == "auth/weak-password") {
        simbol.classList.add("fa-solid")
        simbol.classList.add("fa-circle-xmark")
        textAutenticacion.textContent = "Error contraseña"

      }
      modalAutenticacion.show()
      setTimeout(() => modalAutenticacion.hide(), 2000)

      // ..
    });
});
