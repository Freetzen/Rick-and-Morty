const express = require('express')
require('dotenv').config();
const { PORT } = process.env;
const morgan = require('morgan')
const router = require('./routes/index') // no va index porque por default js busca el index.js
const { conn } = require('./DB_connection');

const server = express()

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   res.header('Access-Control-Allow-Credentials', true); // Habilitar credenciales
   next();
});

//MIDDLEWARE
// => .use((req, res, next)) next()
server.use(morgan('dev')) // Sirve para ver los datos en milisegundos, ruta, etc..
server.use(express.json()) // Permite recibir JSON desde req.body
server.use('/rickandmorty', router)


server.listen(PORT, async () => {
   await conn.sync({force : false})
   try {
      console.log(`Server listening on http://localhost${PORT}`)
   } catch (error) {
      console.log(error.message)
   }
})