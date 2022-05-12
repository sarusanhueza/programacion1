function calcular (){
   const s = document.getElementById("select").value
   const f1 =1750000
   const f2 =1950000
   const f3 =2650000
    let resultado = null
    if (s==1){resultado = f1 - ((f1*5)/100)
    } else {
        if (s==2){
          resultado = 1950000 - ((f2*10)/100)
        } else {resultado = 2650000 - ((f3*15)/100) }
    }

    document.getElementById("hache").textContent = resultado
}

const boton = document.getElementById ("boton")
boton.addEventListener("click",calcular)