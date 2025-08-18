const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');

router.get('/', ctrl.index);
router.post('/store', ctrl.store);


module.exports = router;
