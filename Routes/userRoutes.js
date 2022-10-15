const router = require('express').Router();
const { register } = require('../Controllers/userController')
const { login } = require('../Controllers/userController')



router.post('/register', register);
router.post('/login', login);

module.exports = router;    