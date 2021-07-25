
exports.up = function(knex) {
  return knex.schema
    .createTable("TestTable",(testTable) => {
      testTable.increments("ID").primary();
      testTable.string("TestItem").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("TestTable");
};
