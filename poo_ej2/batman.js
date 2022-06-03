export default class Batman{

constructor(){
    
}


    async consumir_api(){
        const bt = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
        const btm = await bt.json()
        for (const element of btm.Search) {
            console.log(`
            ${element.imdbID}
            ${element.Title}
            ${element.Year}
            ${element.Poster}
            `)
          }
        }
    }