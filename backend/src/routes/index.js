const router = require('express').Router()
const getCharByID = require('../controllers/getCharById.js')
const login = require('../controllers/login.js')
const {postFav, deleteFav} = require('../controllers/handleFavorites.js')

router.get('/character/:id', getCharByID)
router.get('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router