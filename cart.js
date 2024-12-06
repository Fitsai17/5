const express = require('express');
const router = express.Router();
const pool = require('../db');

// Додати продукт у кошик
router.post('/', async (req, res) => {
    const { user_id, product_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO cart (user_id, product_id) VALUES ($1, $2) RETURNING *',
            [user_id, product_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Отримати всі продукти у кошику для конкретного користувача
router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await pool.query(
            `SELECT p.name, p.price 
             FROM cart c
             JOIN products p ON c.product_id = p.id
             WHERE c.user_id = $1`,
            [user_id]
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
