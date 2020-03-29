// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql2',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: 'Hubbi@2020',
                database: 'omnistack',
                charset: 'utf8'
            },
            migrations: {
            directory: './src/database/migrations'
        },
    },

    test: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'Hubbi@2020',
            database: 'omnistack_tests',
            charset: 'utf8'
        },
        migrations: {
            directory: './src/database/migrations'
        },
    }

};
