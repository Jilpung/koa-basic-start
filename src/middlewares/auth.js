import express from 'express';
import { authenticate } from '../middlewares/jwt';
import router from '../routes';

const user = require('../controllers/userController');

router.route('/user').get(authenticate, user.userLogin);
router.route('/toekn').get(authenticateAccessToken, (req, res) => {
  console.log(req.user);
  req.setEncoding(req.user);
});

module.exports = router;
