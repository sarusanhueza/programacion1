
//crear un array
//creamos un arreglo de string
let series = ['breaking bad', 'okupas','narco','casados con hijos', 'peaky blinders']
//comom conocer la longitud de un arreglo
const longitud = series.length
console.log('longitud:' + longitud)
//como accedar a un elemato hacinedo uso del indice 
const primero = series[0]
console.log ('primer elemento:'+primero)
//longitud mennos 1 nos muestra el ultimo elemnto que desconocemos
const ultimo = series[longitud-1]
console.log (ultimo)

//recorrer un areglo haciendo uso de un foreach          
series.forEach((element,index) => {
    console.log(index+'-'+element)
});
series.push('dragon ball')
console.log(series)

//como eliminar el ultimo elemnto de un arregllo
series.pop()
console.log (series)
//como agregar un elemnto al inicio de un arreglo
//como el elemnto tine comillas, las sustituimos por la sdobles
series.unshift("grey's anatomy")
console.log(series)

//como elimino el prime relemento de un arreglo
series.shift("grey's anatomy")
console.log(series)

const indice = series.indexOf("casados con hijos")
console.log('indice obtenido:'+indice)

//eliminar elementos segun su posicion

//1 un unico elemento
series.splice(indice, 1)
//indice significa la posicion, y el 1 la cantidad de elementos que elimino
console.log(series)

//2 mas de un elemento 
const posicion = 1;
const numeorElemento = 2;
const ElementosEliminados = series.splice(posicion,numeorElemento)
console.log(ElementosEliminados)
console.log (series)


//copiar un array
let copia = series.slice()
copia.push("dragon ball")
console.log(series)
console.log(copia)










































