function almacenar_indice(indice){
    localStorage.setItem("indice", indice)
}
function editar(indice){
   let lista =  JSON.parse(localStorage.getItem("elementillo"))
   document.getElementById("D").value = lista[indice].Descripcion
   document.getElementById("P").value = lista[indice].Precio
   document.getElementById("I").value = lista[indice].Imagen
   document.getElementById("d").value = lista[indice].Detalles
   document.getElementById("C").value = lista[indice].Categoria

    document.getElementById("parche").style.display = 'none'
    document.getElementById("parche2").style.display = 'block'

        localStorage.setItem("apple", indice)


}