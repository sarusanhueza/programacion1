function almacenar_indice (indice)
{
localStorage.setItem("indice", indice)
}
function editar_formulario(index){
    let lista_productos=JSON.parse(localStorage.getItem("produccto"))
   document.getElementById("Descripcion").value = lista_productos[index].Descripcion
   document.getElementById("Precio").value = lista_productos[index].Precio
   document.getElementById("select").value = lista_productos[index].Categoria

   localStorage.setItem("indice",index)
   //apagamos el boton guardar
   document.getElementById("bon").style.display = "none"
   //apagamos el boton actualizar
   document.getElementById("bon2").style.display = "block"

}
