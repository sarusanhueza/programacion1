function hipotenuza(d1,d2){
    const primero = Math.pow(d1,2) + Math.pow(d2,2)
    const segundo = Math.sqrt(primero)
    return segundo
}

function mostrar(){
    const d1 = document.getElementById ("a").value
    const d2 = document.getElementById ("b").value
    const segundo = hipotenuza(d1,d2)
    document.getElementById ("h_resultado").textContent = segundo
}
const boton = document.getElementById ("presionar")

boton.addEventListener("click",mostrar)