const fs = require('fs')

const promise = new Promise((resolve, reject) => {
    //Código Asíncrono

    fs.readFile(
        __dirname + '/archivo.txt', 'utf-8', (error, data) => {

            if(error) return reject(Error('Algo no funciona'))

            else return resolve(data)
        }
    )

})

console.log(typeof promise)