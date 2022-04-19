const calcular = (datoA) => {
    const temperatura1 = ( datoA * (9/5)) + 32 
    return temperatura1
}

const mostrar = () => {
    const koko = document.getElementById("datoA").value
   const respuesta = calcular(koko)

   document.getElementById("respuesta").textContent = respuesta
}
const boton = document.getElementById("troy")
boton.addEventListener("click",mostrar)

