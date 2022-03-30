//funcion simple
function mostrar_mensaje() {
    alert ('probando mi funcion')
} 
function mostrar_en_consola() {
    const nombre_apellido = 'sara sanhueza'
/* forma 1 - sin template string*/
console.log('nombre y apellido:'+ nombre_apellido)

/*forma 2 */
console.log (`
apodo: ${nombre_apellido} 
dni: 8888
direccion: arenales`)

}
//condicionales
function validar() {
    const calificacion = prompt('INGRESE SU CALIFICACION');
   /* forma-1
    if(calificacion >= 7){
         alert('estas aprobado')
    } else{
        alert ('nos vemos en diciembre')
    }*/
    
    //forma-2  terneario
    (calificacion>=7)? alert ('ESTAS APROBADO'): alert('ESTAS DESAPROBADO')          



}

//funcion con retorno y comunicacion entre funciones
function calcular() {
   const number = prompt('ingresa un numero:');
   const resultado = number*10
   return resultado

}
function visualizar() {
const respuesta = calcular()
alert (respuesta) 
}
