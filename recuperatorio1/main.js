const presentar = ()=> {
    let so = {
        titulo: 'Windows 11',
        compania: 'Microsoft',
        requisitos: {
        procesador: '1GHZ o más',
        ram: '4GB',
        almacenamiento: '64GB o más',
       tpm: 'Version 2.0',
        },
       fecha_lanzamiento: '24 de Junio de 2021'
        }
 const { procesador, ram, almacenamiento, tpm } = so.requisitos
 const {titulo, compania} = so

console.log(`
    Titulo: ${titulo}
    Compañia: ${compania}
    Requisitos: 
     Procesador: ${procesador}
     Ram: ${ram}
     Almacenamiento: ${almacenamiento}
     tpm: ${tpm}
`)
}
const boton = document.getElementById ("botonsito")
boton.addEventListener("click",presentar)