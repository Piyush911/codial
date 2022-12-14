const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_controller');

router.get('/profile',usersController.profile);
router.get('/sign-up',usersController.sign_up);
router.get('/sign-in',usersController.sign_in);

module.exports = router;