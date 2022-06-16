const consumir_datos = async () =>{
        const datos_recibidos = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    
        const lista = await datos_recibidos.json()
         let fila = []
                lista.provincias.forEach((element,index) => {
                  let filita = 
                 ` <tr>
                      <td>${index+1}</td>
                      <td>${element.nombre}</td>
                  </tr>`
                  fila.push(filita)
                    
                });
                document.getElementById("tablita").innerHTML = fila.join('')
        
            
        }

        consumir_datos()