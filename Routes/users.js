const express = require('express');
const Authentication = new(require('../Middlewares/authentication'));
const router = express.Router();
const userController = new(require('../Controllers/users'));

router.route('/sign-up').post(userController.signUp);

router.route('/sign-in').post(userController.signIn);

router.route('/profile').get(Authentication.userAuth, userController.getProfile);

router.route('/update').put(Authentication.userAuth, userController.update);

router.route('/delete_acc').put(Authentication.userAuth, userController.deleteAccount);

router.route('/status_change').put(Authentication.userAuth, userController.statusChange);

router.route('/reset_password').put(Authentication.userAuth, userController.resetPassword);

router.route('/send_otp').post(userController.sendOtpToEmail);

router.route('/check_otp').post(userController.checkOtp);

router.route('/change_password').post(userController.changePassword);

router.route('/send_token').post(userController.sendToken);

router.route('/reset_password_token').post(userController.resetPasswordByToken);

router.route('/:username').get(userController.findUserByUsername);

module.exports = router;
