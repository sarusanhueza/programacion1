let consolas = ['Play station','Xbox','Nintendo Game Cube','Sega Dreancast','Game Boy Advared']

const eliminar = 2;
const eliminarNumero = 2;
const ElementosEliminados = consolas.splice(eliminar,eliminarNumero)
consolas.push('Nintendo 64')
consolas.unshift('Nintendo Wii')
console.log(consolas)



const longitud = consolas.length
const ultimo = consolas[longitud-1]
const elemento = consolas[2]


const imprimir = () =>{
    document.getElementById('cosas').textContent = `
    cantidad de elementos : ${longitud},
    el ultimo elemento es : ${ultimo},
    Xbox : ${elemento}
    `
}

const boton = document.getElementById('boo')
boton.addEventListener("click",imprimir)



function generar(){

    consolas.forEach(element => {
      
        
    });

}
const cosita = document.getElementById('cossita')
cosita.addEventListener("click",generar)

