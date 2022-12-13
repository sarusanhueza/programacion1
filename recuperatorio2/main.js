const calcular = (v1, v2) => {
    const velocidadFinal = Math.sqrt( Math.pow(v1,2) + ((2*9.8)*v2))
    return velocidadFinal


}
const mostrar = () =>{
    const A = document.getElementById ("vi").value
    const B = document.getElementById ("h").value
    const velocidadFinal = calcular(A,B)
    document.getElementById("pan").textContent = velocidadFinal

}
const boton = document.getElementById ("manteca")

boton.addEventListener("click",mostrar)