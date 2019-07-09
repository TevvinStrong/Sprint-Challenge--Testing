
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        { title: 'COD-Ghost', genre: 'Console', releaseYear: 2013 },
        { title: 'COD-Advanced Warfare', genre: 'Console', releaseYear: 2014 },
        { title: 'Foriza Horizon 2', genre: 'Console', releaseYear: 2014 },
      ]);
    });
};
