export default class Producto {



    constructor(d,p,c){
        this.Descripcion = d
        this.precio_venta = p
        this.categoria = c
    }

    guardar_producto(){

        let new_product = {
            Descripcion : this.Descripcion,
            Precio : this.precio_venta,
            Categoria : this.categoria
        }

        if("produccto" in localStorage){
            let lista_productos = JSON.parse(localStorage.getItem("produccto"))
            lista_productos.push(new_product)
            localStorage.setItem("produccto",JSON.stringify(lista_productos))
        } 

        else 
        {let lista = []
        lista.push(new_product)
        localStorage.setItem("produccto", JSON.stringify(lista))}

        this.obtener_productos()
    }

    /*recolectamos todos los productos alojados en el item "producctos" que estan en notacion json. 
    Debemos convertirlo en notacion nativa de javaScrip ((es decir, hacemos JSON.parce()))
    */
 
    obtener_productos(){

        if("produccto" in localStorage){
            let listaa = JSON.parse(localStorage.getItem("produccto"))
            let filas = []
            listaa.forEach((element,index) => {
                let fila = 
                `<tr>
                    <td>${index+1}</td>
                    <td>${element.Descripcion}</td>
                    <td>${element.Precio}</td>
                    <td>${element.Categoria}</td>
                    <td>
                        <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i>
                        </button>
                        <button onclick = "editar_formulario(${index})" class = "btn btn-primary btn-sm">
                        <i class="fa fa-edit"></i>
                        </button>
                    </td>

                </tr>`
                filas.push(fila)
                
            });
            document.getElementById("tb").innerHTML = filas.join('')
        }
        
    }

    eliminar_producto(indice){
       let lista_productos = JSON.parse(localStorage.getItem("produccto")) 
       lista_productos.splice(indice,1)
       localStorage.setItem("produccto", JSON.stringify(lista_productos))
       this.obtener_productos()
    }

    acualizar_producto(){
        let indice = localStorage.getItem("indice")
        let lista_productos = JSON.parse (localStorage.getItem("produccto"))
        lista_productos[indice].Descripcion = document.getElementById("Descripcion").value
        lista_productos[indice].Precio = document.getElementById("Precio").value
        lista_productos[indice].Categoria = document.getElementById("select").value

        localStorage.setItem("produccto", JSON.stringify(lista_productos))
        this.obtener_productos()
        document.getElementById("bon").style.display = "block"
        document.getElementById("bon2").style.display = "none"

    }


}


