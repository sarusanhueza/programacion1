import Elementos from "./elementos.js";

function guardar(){
    let descripcion = document.getElementById("D").value
    let precio = document.getElementById("P").value
    let imagen = document.getElementById("I").value
    let detalles = document.getElementById("d").value
    let categoria = document.getElementById("S").value

    let elementos = new Elementos(descripcion,precio,imagen,detalles,categoria)
    elementos.guardar_producto()

  

}


document.getElementById("parche").addEventListener("click", guardar)

function obtener(){
    let producto = new Elementos()
    producto.obtener_productos()
}
obtener()