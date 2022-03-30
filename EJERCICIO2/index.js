function calcular_area(){
    const n1 = prompt ('ingrese el valor de la base');
    const n2 = prompt ('ingrese el segundo valor');
    const n3 = prompt ('ingrese el valor de la altura');
    const resultado = ((parseInt( n1)+parseInt( n2))*n3)/2
    return resultado  
}
function mostrar() {
    const resultado = calcular_area()
    alert ('El resultado del área es: '+resultado)
    
}