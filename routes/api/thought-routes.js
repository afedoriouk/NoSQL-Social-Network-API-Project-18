
//Require express router
const router = require('express').Router();
const {getAllThoughts} =require('../../controllers/thought-controller')

//api/thoughts
router.route('/').get(getAllThoughts);

//Export module router
module.exports = router;
