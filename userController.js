const db = require('../db');

// Створення нового користувача
async function createUser(req, res) {
    const { name, email } = req.body;
    try {
        const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal server error');
    }
}

// Оновлення існуючого користувача
async function updateUser(req, res) {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    try {
        const result = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, userId]);
        if (result.rows.length === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Internal server error');
    }
}

module.exports = { createUser, updateUser };
