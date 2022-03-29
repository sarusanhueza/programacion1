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
    const calificacion = prompt('ingrese su calificacion');
    if(calificacion >= 7){
         alert('estas aprobado')
    } else{
        alert ('nos vemos en diciembre')
    }
}