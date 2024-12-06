const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'weyzer',
    port: 5432, // стандартний порт PostgreSQL
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Database connection error:', err));

module.exports = client;
