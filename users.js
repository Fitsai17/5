const express = require('express');
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require('../controllers/userController');

// Роут для отримання всіх користувачів
router.get('/', getUsers);

// Роут для додавання нового користувача
router.post('/', addUser);

// Роут для оновлення користувача
router.put('/:id', updateUser);

// Роут для видалення користувача
router.delete('/:id', deleteUser);

module.exports = router;
