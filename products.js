// Файл: routes/products.js

const express = require('express');
const router = express.Router();
const pool = require('../db');

// Оновити інформацію про продукт
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    try {
        const result = await pool.query(
            `UPDATE products 
             SET name = $1, price = $2 
             WHERE id = $3 
             RETURNING *`,
            [name, price, id]
        );

        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        console.error('Error updating product:', err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
