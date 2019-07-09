
exports.up = function (knex) {
    return knex.schema.createTable('games', tbl => {
        tbl.increments();

        tbl.string('title', 200).notNullable();

        tbl.string('genre', 200).notNullable();

        tbl.integer('releaseYear')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('games');
};
