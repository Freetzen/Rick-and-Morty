const deleteFav = require('../controllers/deleteFav.js')
const getCharByID = require('../controllers/getCharById.js')
const login = require('../controllers/login.js')
const postFav = require('../controllers/postFav.js')
const postUser = require('../controllers/postUser.js')
const router = require('express').Router()



router.get('/character/:id', getCharByID)
router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router