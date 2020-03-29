const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connectoin.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "ONG",
                email: "ong@ong.com.br",
                whatsapp: "84998177501",
                city: "Natal",
                uf: "RN",
            });

        expect(response.body).toHaveProperty('id');
    });
});