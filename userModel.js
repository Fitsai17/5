const db = require('../db');

const getUsers = async () => {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
};

const addUser = async (name, email) => {
    const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    return result.rows[0];
};

const updateUser = async (id, name, email) => {
    const result = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};
