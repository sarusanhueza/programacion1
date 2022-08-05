export default class Elementos{
    

    constructor(D,P,I,d,C){
        this.descripcion = D
        this.precio = P
        this.imagen = I
        this.detatalles = d
        this.categoria = C

    }

    guardar_producto(){


        let agregar = {
            Descripcion : this.descripcion,
            Precio : this.precio,
            Imagen : this.imagen,
            Detalles : this.detatalles,
            Categoria : this.categoria
        }

        if("elementillo" in localStorage){
            let lista_productos = JSON.parse(localStorage.getItem("elementillo"))
            lista_productos.push(agregar)
            localStorage.setItem("elementillo",JSON.stringify(lista_productos))
        } 

        else 
        {let lista = []
        lista.push(agregar)
        localStorage.setItem("elementillo", JSON.stringify(lista))}

        this.obtener_productos()
    }

    /*recolectamos todos los productos alojados en el item "producctos" que estan en notacion json. 
    Debemos convertirlo en notacion nativa de javaScrip ((es decir, hacemos JSON.parce()))
    */
 
    obtener_productos(){

        if("elementillo" in localStorage){
            let listaa = JSON.parse(localStorage.getItem("elementillo"))
            let filas = []
            listaa.forEach((element,index) => {
                let fila = 
                `<tr>
                    <td>${index+1}</td>
                    <td>${element.Descripcion}</td>
                    <td>${element.Precio}</td>
                    <td>
                    <img style="width:4rem" src="${element.Imagen}">
                    </td>
                    <td>${element.Detalles}</td>
                    <td>${element.Categoria}</td>
                    
                    <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#MODAL" class="btn btn-danger btn-sm">
                    <i class="fa fa-trash"></i>
                </button>
                <button onclick="editar(${index})" class= "btn btn-primary btn-sm"> 
                <i class = "fa fa-edit"></i>
                </button>
                    </td>
                        
                </tr>`
                filas.push(fila)
                
            });
            document.getElementById("table").innerHTML = filas.join('')
        }
        
    }

    eliminar_producto(){
        let indice = localStorage.getItem("indice")
        let lista_productos = JSON.parse(localStorage.getItem("elementillo"))
        lista_productos.splice(indice,1)
        localStorage.setItem("elementillo",JSON.stringify(lista_productos))
        this.obtener_productos()
    
    }

    actualizar_producto(){
        let indice = localStorage.getItem("apple")
        let listaa = JSON.parse(localStorage.getItem("elementillo"))
        listaa[indice].Descripcion = document.getElementById("D").value
        listaa[indice].Precio = document.getElementById("P").value
        listaa[indice].Imagen = document.getElementById("I").value
        listaa[indice].Detalles = document.getElementById("d").value
        listaa[indice].Categoria = document.getElementById("C").value

        localStorage.setItem("elementillo", JSON.stringify(listaa))
        this.obtener_productos()
        document.getElementById("parche").style.display = 'block'
        document.getElementById("parche2").style.display = 'none'


    }



}