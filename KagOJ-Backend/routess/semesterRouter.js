const express = require('express');
const router = express.Router()
const SemesterController = require('../controllers/semesterController');



// router.get('/', login);
router.get('/', SemesterController.fetch);
// router.post('/verify/:token', applicantAuthController.ensure);
// router.post('/requestForgotPassword', applicantAuthController.requestForgotPassword);
// router.post('/forgotPassword', applicantAuthController.forgotPass);

module.exports = router;