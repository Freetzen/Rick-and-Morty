const express = require('express')
const morgan = require('morgan')
const router = require('./routes') // no va index porque por default js busca el index.js

const server = express()
const PORT = 3001

server.listen(PORT, () => {console.log(`Server listening on http://localhost${PORT}`)})

//MIDDLEWARE
// => .use((req, res, next)) next()
server.use(morgan('dev')) // Sirve para ver los datos en milisegundos, ruta, etc..
server.use(express.json()) // Permite recibir JSON desde req.body
server.use('/rickandmorty', router)

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});
