import Producto from "./producto.js";

function guardar(){
    let Descripcion = document.getElementById("Descripcion").value
    let precio_venta = document.getElementById("Precio").value
    let categoria = document.getElementById("select").value

    let producto = new Producto(Descripcion,precio_venta,categoria)
    producto.guardar_producto()

}
document.getElementById("bon").addEventListener("click", guardar)

function listar(){
    let producto = new Producto()
    producto.obtener_productos()
}
listar()

function eliminar(){
    let indice = localStorage.getItem("indice")
    let producto = new Producto()
    producto.eliminar_producto(indice)
    
}
document.getElementById("elino").addEventListener("click",eliminar)