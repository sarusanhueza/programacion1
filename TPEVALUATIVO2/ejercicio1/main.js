const consumir_datos = async () =>{
    const datos_recibidos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const lista = await datos_recibidos.json()
     let fila = []
            lista.forEach((element,index) => {
//el index esta en +1 porque quiero que la tabla (fila) arranque de 1
              let filita = 
             ` <tr>
             
                  <td>${index+1}</td>
                  <td>${element.casa.nombre}</td> 
                  <td>${element.casa.compra}</td>
                  <td>${element.casa.venta}</td>
                  <td>${element.casa.agencia}</td>
                  <td>${element.casa.variacion}</td>
                  <td>${element.casa.ventaCero}</td>
                  <td>${element.casa.decimales}</td>
              </tr>`
              fila.push(filita)
                
            });
            document.getElementById("tablita").innerHTML = fila.join('')
    
        
    }

    consumir_datos()