const tareas = [
    {
        nombre: 'Testeando soft',
        duracion: 25
    },
    {
        nombre: 'Implemantacion de alta cliente',
        duraciion: 90
    },
    {
        nomnre: 'Actualiza cliente',
        duracion: 40
    },
    {
        nombre: 'deploy de soft',
        duracion: 120
    },
    {
        nombre: 'correccion de bug',
        duracion: 180
    }
]
//metodo clasico()

/*let nombres = []
tareas.forEach(element => {
    nombres.push(element.nombre)
});*/

//metodo map() simepre me entraga un array 
let nombre2 = tareas.map (tarea => tarea.nombre)



//forma baisca
let tareas_prolongadas = []
tareas.forEach(element => {
    if(element.duracion >= 120){
        tareas_prolongadas.push(element)
    }
  }  
);
console.log (tareas_prolongadas)



//filtrar haciendo uso del metodo filter()
const t_prolongadas2 = tareas.filter(tarea => {
    return tareas.duracion >= 120} )


