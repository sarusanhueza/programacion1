function calcualr (){
   const s = document.getElementById("select").value
    let resultado = null
    if (s==1){
        resultado = 1750000 - ((f1*5)/100)
    } else {
        if (s==2){
          resultado = 1950000 - ((f2*10)/100)
        }else {
            resultado = 2650000 - ((f3*15)/100)
        }
    }
    document.getElementById("hache").textContent = resultado
    
}
const boton = document.getElementById ("boton")
    boton.addEventListener("click")