const { User } = require('../DB_connection')

const login = async (req, res) => {

  try {

    const { email, password} = req.query

    if(email && password){
        const actualUser = await User.findOne({ // Devielve objeto con datos o UNDEFINED
            where: { email }
        })
        if(actualUser){
            if(actualUser.password === password){
                return res.status(200).json({access: true})
            }
            return res.status(403).send('Contraseña incorrecta.')
        }
        return res.status(404).send('Usuario no encontrado.')
    }

    return res.status(400).send('Faltan Datos')

  } catch (error) {
    return res.status(500).send(error.message)
  }

}

module.exports = login