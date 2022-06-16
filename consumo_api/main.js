const consumir_datos = async () =>{
        const datos_recibidos = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    
        const lista = await datos_recibidos.json()
        
        function generar(){
            let fila = []
                datos_recibidos.forEach((element,index) => {
                  let filita = 
                 ` <tr>
                      <td>${index+1}</td>
                      <td>${element}</td>
                  </tr>`
                  fila.push(filita)
                    
                });
                document.getElementById("tablita").innerHTML = fila.join('')
            
            }
        }