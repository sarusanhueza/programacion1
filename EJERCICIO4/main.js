const calcular = (d1,d2,d3) => {
    const raiz_cuadrada = Math.sqrt( Math.pow(d2,2) - (4*d1*d3))
    const variable = -d2 + (raiz_cuadrada)
    const resulatdo1 = variable / (2*d1)
    const variable2 = -d2 - (raiz_cuadrada)
    const resulatdo2 = variable2 / (2*d1)

    return 'Raiz 1 = '+resulatdo1+'  Raiz 2 = '+resulatdo2

    
}
const mostrar = () => {
    const A = document.getElementById ("dato1").value
    const B = document.getElementById ("dato2").value
    const C = document.getElementById ("dato3").value
    const respuesta = calcular(A,B,C)
    document.getElementById("h_resultado").textContent = respuesta
}

const boton = document.getElementById ("btn_calcular")

boton.addEventListener("click",mostrar)