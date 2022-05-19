const consumir_datos = async () =>{
    const datos_recibidos = await fetch('https://jsonplaceholder.typicode.com/users')

    const lista_usuarios = await datos_recibidos.json()
    
    let items = []

    lista_usuarios.forEach(usuarios => {
        let li =  `<li class="list-group-item">${usuarios.name}</li>`
        items.push(li)


    });
    document.getElementById("list-user").innerHTML = items.join('')
    
}
consumir_datos()