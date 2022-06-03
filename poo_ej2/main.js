import Batman from "./batman.js";

function invocar(){



const batman = new Batman()
batman.consumir_api()

}


document.getElementById('boton').addEventListener("click", invocar)