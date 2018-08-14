
exports.up = function(knex) {
  return knex.schema.createTable('events2', (table)=>{
    table.increments();
    table.string('title', 264)
    table.string('description', 264).notNullable()
    table.datetime('date').notNullable()
    table.string('location').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events2');
};
