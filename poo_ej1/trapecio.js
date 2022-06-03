export default class Trapecio{


    constructor(B,b,a){
        this.bmayor = B
        this.bmenor = b
        this.altura = a
    }


    calcular_area(){
     const respuesta = ((Number(this.bmayor)+Number(this.bmenor))/2)*this.altura
    return respuesta
    }



}