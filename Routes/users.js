const express = require('express');
const Authentication = new(require('../Middlewares/authentication'));
const router = express.Router();
const userController = new(require('../Controllers/users'));

router.route('/sign-up').post(userController.signUp);

router.route('/sign-in').post(userController.signIn);

router.route('/profile').get(Authentication.userAuth, userController.getProfile);

router.put('/:id');

router.delete('/:id');

module.exports = router;
