function ejercutar (datoA, datoB,S){
    let resultado = null
    if(S==40){
        resultado = parseInt(datoA) + parseInt(datoB)
    } else {
        if (S==39){
           resultado  = datoA-datoB
        } else {
            if (S==38){
                rssultado = datoA*datoB
            } else {
                if (S==37){
                    resultado = datoA/datoB
                }
            }
        }
    }
    return resultado
}


function mostrar(){
    const S = document.getElementById('s_operac').value
    const datoA = document.getElementById('A').value
    const datoB = document.getElementById('B').value
    const respuesta = ejercutar (datoA,datoB,S)
    document.getElementById("respuesta").textContent = respuesta
}
const boton =  document.getElementById("boton")
boton.addEventListener("click",mostrar)

