const getCharByID = require('../controllers/getCharById.js')
const login = require('../controllers/login.js')
const {postFav, deleteFav} = require('../controllers/handleFavorites.js')
const router = require('express').Router()

router.get('/character/:id', getCharByID)
router.get('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router