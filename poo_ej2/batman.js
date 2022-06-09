export default class Batman{

constructor(){
    
}


    async consumir_api(){
        const bt = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const btm = await bt.json()

        let columnas = []
        for (const element of btm.Search) {
            
          let columna =
        
          `<div class="col-lg-3">
              <div class="card">
                <img src="${element.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.Title}</h5>
      
        
                      <div class="card card-body">
                       <p class="card-text">${element.Year}</p>
                      </div>
                  
    
                </div>
      
              </div>
          </div>`
      
            columnas.push(columna)

          }

          document.getElementById("notengoidea").innerHTML = columnas.join('')
        }

        
    }