const { Favorite } = require('../DB_connection')

const postFav = async (req, res) => {
    try {
        const {id, status, name, species, origin, image, gender} = req.body

        if(id && name && origin && status && image && species && gender){
            const newFav = await Favorite.findOrCreate({
                where: { id, name, origin, status, image, species, gender }
            })
            const allFavorites = await Favorite.findAll()
            return res.status(200).json(allFavorites)
        }
        return res.status(401).send('Faltan datos')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postFav