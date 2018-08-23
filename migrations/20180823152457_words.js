
exports.up = function(knex, Promise) {
  return knex.schema.createTable('words', table => {
      table.increments('id').primary()
      table.string('maori_word')
      table.string('pronunciation')
      table.string('filename')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('words')
};
