const calcular = (temp) => {
    let resultado = null
    if( temp >= 14 && temp <= 32){
        resultado = "la temperaura es baja"
    } else{
        if ( temp >32 && temp <= 68){
            resultado =  "la temperatura es adecuada"
        } else{
            if (temp >68 && temp <= 96){
                resultado =  "temperatura alta"
            } else {resultado=  "temperatura desconocida"}
        }
    }
    return resultado
   
    }
    
    const mostrar = () => {
        const temp = document.getElementById ("temperatura").value
        const resultado = calcular(temp)
        document.getElementById("respuesta").textContent = resultado
    }
    const boton = document.getElementById ("botn")
    boton.addEventListener("click",mostrar)