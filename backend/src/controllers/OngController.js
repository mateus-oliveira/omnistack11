const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const {name, email, whatsapp, city, uf} = req.body;

        const ong = await connection('ongs').insert({
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json({"id": ong[0]});
    },

    async index(req, res){
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },
};