const db = require('../database/dbConfig');
const Games = require('./games-model');

describe('games model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('games').truncate();
        })

        it('Should insert provided game to the db', async () => {
            const newG = {
                title: 'Sims',
                genre: 'idk',
                releaseYear: '2000'
            }
            const game = await Games.insert(newG);
            expect(game.title).toBe('Sims');
        });
    });

}); 