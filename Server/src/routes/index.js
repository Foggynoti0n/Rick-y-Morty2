
const {Router}= require('express');
const getCharByid= require('../controllers/getCharById');
const login=require('../controllers/login');
const {postFav, deleteFav}= require('../controllers/handlefavorites')

const router = Router();

router.get('/character/:id', getCharByid);
router.get('login/', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports= router;