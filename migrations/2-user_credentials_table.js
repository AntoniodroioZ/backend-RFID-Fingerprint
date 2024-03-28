exports.up = function(knex) {
    return knex.schema.createTable('user_credentials', function(table) {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.string('credential_id').notNullable();
      table.foreign('user_id').references('users.id').onDelete('CASCADE');
      table.unique(['user_id', 'credential_id']);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user_credentials');
  };
  