exports.up = function(knex) { 
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.decimal('value').notNullable();
        table.string('description').notNullable();

        table.integer('ong_id').unsigned().references('id').inTable('ongs').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};