exports.up = function (knex, Promise) {
  return knex.schema.createTable("glink", table => {
    table.increments("id");
    table.text("linkName").notNullable();
    table.text("url").notNullable();
    table.text("description").notNullable();
    table.text("frequency").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("glink");
};
