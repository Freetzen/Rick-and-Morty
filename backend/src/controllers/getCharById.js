const axios = require('axios')

const URL = `http://localhost:3001/rickandmorty/character`

const getCharByID = (req, res) => {
    const { id } = req.params

    axios.get(`${URL}/${id}`)
    .then(({data}) => { //Objeto
        const { id, status, name, species, origin, image, gender, location } = data

        const character = {
            id,
            status,
            name,
            species,
            origin,
            image,
            gender,
            location
        }

        return character.name ? res.json(character) : res.status(404).send('Not Found')
    })
    .catch((err) =>{
        return res.status(500).send(err.message)
    })
}

module.exports = getCharByID