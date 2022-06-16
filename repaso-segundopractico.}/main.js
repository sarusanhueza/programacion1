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
let fila = []
    consolas.forEach((element,index) => {
      let filita = 
     ` <tr>
          <td>${index+1}</td>
          <td>${element}</td>
      </tr>`
      fila.push(filita)
        
    });
    document.getElementById("tablass_").innerHTML = fila.join('')

}
const cosita = document.getElementById('cossita')
cosita.addEventListener("click",generar)

