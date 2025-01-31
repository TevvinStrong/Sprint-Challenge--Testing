const db = require('../database/dbConfig');

module.exports = {
    insert,
    getAll
}

async function insert(game) {
    const [id] = await db('games').insert(game);

    return db('games').where({ id });
}

function getAll() {
    return db('games');
} 
