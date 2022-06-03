import Trapecio from "./trapecio.js";

function invocar(){

    const bmayor = document.getElementById("B").value
    const bmenor = document.getElementById("b").value
    const altura = document.getElementById("a").value



const trapecio = new Trapecio(bmayor,bmenor,altura)
const respuesta = trapecio.calcular_area()
document.getElementById("hache").textContent ='el area del trapecio es: '+ respuesta 
}


document.getElementById('boton').addEventListener("click", invocar)

