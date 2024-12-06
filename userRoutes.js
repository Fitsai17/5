const express = require('express');
const router = express.Router();
const { createUser, updateUser } = require('../controllers/userController');

router.post('/users', createUser);
router.put('/users/:id', updateUser);

module.exports = router;
