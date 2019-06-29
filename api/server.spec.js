const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('get /', () => {
        it('should return test string', async () => {
            const res = await request(server).get('/');
            expect.stringContaining('Server is reponding and running!');
        });
    });
});
