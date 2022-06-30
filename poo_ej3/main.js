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