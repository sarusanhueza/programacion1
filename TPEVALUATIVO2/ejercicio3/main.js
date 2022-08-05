 
 const  captar = () => {
 
 const lenguaje = {
            nombre: 'Javascript',
            librerias: {
                 libreria_1: 'Jquery',
                  libreria_2: 'React',
                   libreria_3: 'Vuejs' } }




    const {nombre} = lenguaje
    const {libreria_1, libreria_2, libreria_3} = lenguaje.librerias

console.log(`
   Nombre: ${nombre}
    libreria N° 1 :${libreria_1}
    libreria N° 2 :${libreria_2}
    libreria N° 3 :${libreria_3}`
    
    )
    
 }

const boton = document.getElementById ("bonbom")
boton.addEventListener("click", captar)