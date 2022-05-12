let alumno = {
    nombre : 'emmanuel',
    apellido : 'maldonado',
    dni : 46671888,
    correos : {
        outlook : 'emmnuelqoutlook.com',
        gmail : 'emmanuel@gmail.com',
        yahoo : 'emmanuel@yahoo.com'
     }

}
// forma 1
// const yahoo = alumno.correos.yahoo
// const gmail = alumno.correos.gmail
// const outlook = alumno.correos.outlook

// forma 2
const { yahoo, gmail, outlook } = alumno.correos

console.log(`
    correos: 

    Gmail: ${gmail}
    Yahoo: ${yahoo}
    Outlook: ${outlook}
`)