export default class Producto {



    constructor(d,p,c){
        this.Descripcion = d
        this.precio_venta = p
        this.categoria = c


    }


    guardar_producto(){

        let new_product = {
            descripcion : this.Descripcion,
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


    }
}