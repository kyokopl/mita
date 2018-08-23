
exports.up = function(knex, Promise) {
    return knex.schema.createTable('places', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('pronunciation')
        table.string('filename')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('places')
};
