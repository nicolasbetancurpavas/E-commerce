import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const btnRegister = document.getElementById("register");

btnRegister.addEventListener("click", () => {
  const auth = getAuth();

  const email = document.getElementById("correo").value;
  const password = document.getElementById("contrase").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("exito en el registro");
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error");
      // ..
    });
});
