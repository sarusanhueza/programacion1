function calcular (datoA,datoB,datoC){
    const resultado = parseInt (datoA)+ parseInt (datoB)+ parseInt (datoC)
    const mensaje = (resultado==180)? 'ES VALIDO': 'NO ES VALIDO'
    return mensaje 
}
    
function mostrar (){
    const A = document.getElementById ("datoA").value
    const B = document.getElementById ("datoB").value
    const C = document.getElementById ("datoC").value
    const respuesta = calcular(A,B,C)
    document.getElementById("h_resultado").textContent = respuesta
}


const boton = document.getElementById ("troy")

boton.addEventListener("click",mostrar)
    

