let lenguajes  = ['Python', 'JavaScript', 'Csharp', 'C++' , 'Java' , 'PHP' , 'Ruby']

function mostrar (){
    const longit = lenguajes.length
    console.log (longit)

    const ultimo = lenguajes [longit-1]
    console.log (ultimo)

    const tercero  = lenguajes [2]
    console.log (tercero)

}

function traer (){
    lenguajes.forEach((element) => {
        console.log(element)
    })

}

const go = lenguajes.push('Go')
console.log(go)

lenguajes.shift()
console.log(lenguajes)

lenguajes.unshift('kotlin')
console.log(lenguajes)

const posicion = 4;
const numeorElemento = 2;
const Eliminados = lenguajes.splice(posicion,numeorElemento)
console.log(Eliminados)
console.log (lenguajes)

console.log(lenguajes)



