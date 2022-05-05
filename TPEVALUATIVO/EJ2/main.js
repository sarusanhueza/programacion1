const calcular = () => {
    const resultado = n1 * n2
    return resultado
    }
    
    const mostrar = () => {
        const dato1 = document.getElementById ("dato1").value
        const respuesta = calcular(dato1,dato2)
        document.getElementById("h_resultado").textContent = respuesta
    }

    const boton = document.getElementById ("btn_calcular")
    boton.addEventListener("click",mostrar)
