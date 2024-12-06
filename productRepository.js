const db = require('../db'); // Змінили шлях до файлу

exports.getAll = async () => {
    try {
        const result = await db.query('SELECT * FROM products');
        return result.rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

exports.add = async (name, price) => {
    try {
        const result = await db.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
        return result.rows[0];
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

exports.update = async (id, name, price) => {
    try {
        const result = await db.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', [name, price, id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

exports.remove = async (id) => {
    try {
        await db.query('DELETE FROM products WHERE id = $1', [id]);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
