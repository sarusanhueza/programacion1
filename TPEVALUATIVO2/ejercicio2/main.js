let criptos = ["Bitcoin", "Ethereum","Tether", "BNB", "Cardano", "Dai", "Helium",
               "Shiba Inu", "Tron", "Cronos", "Solana"]

criptos.unshift("Stellar")

const posicion = criptos.indexOf("Shiba Inu");
const numeorElemento = 2;
const ElementosEliminados = criptos.splice(posicion,numeorElemento)

criptos.push("Gate")


const longitud = criptos.length
const ultimo = criptos[longitud-1]
const indice = criptos.indexOf("Helium")
function imprimir() {
    document.getElementById('parraffo').textContent = `
    cantidad de elementos : ${longitud},
    el ultimo elemento es : ${ultimo},
     helium: ${indice}
    `
}
const boton = document.getElementById ("botoncito")
boton.addEventListener("click",imprimir)



const mostrar = () => {
    let filas = []
    criptos.forEach((element) => {
        let fila = `<li class="list-group-item">${element}</li>`
        filas.push(fila)
    });
    document.getElementById("ul").innerHTML = filas.join('')
}

const p = document.getElementById("hay")
p.addEventListener("click",mostrar)




