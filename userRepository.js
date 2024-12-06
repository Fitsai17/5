const db = require('../db'); // Шлях змінено відповідно до вашої структури

exports.getAll = async () => {
    try {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

exports.add = async (name, email) => {
    try {
        const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        return result.rows[0];
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

exports.update = async (id, name, email) => {
    try {
        const result = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

exports.remove = async (id) => {
    try {
        await db.query('DELETE FROM users WHERE id = $1', [id]);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
