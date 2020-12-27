const { Pool } = require('pg');
const confi = {
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'practica'
}
const db = new Pool(confi);
module.exports = {
    db
}