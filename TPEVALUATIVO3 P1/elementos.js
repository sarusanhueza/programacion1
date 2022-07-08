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
                    <td>${element.Imagen}</td>
                    <td>${element.Detalles}</td>
                    <td>${element.Categoria}</td>

                </tr>`
                filas.push(fila)
                
            });
            document.getElementById("table").innerHTML = filas.join('')
        }
        
    }

    





}