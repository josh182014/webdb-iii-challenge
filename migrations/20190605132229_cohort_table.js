//this creates our cohorts table with the id and name
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', function (cohorts) {
    cohorts.increments() //increment creates a primary key called id that auto-increments
    cohorts
        .string('name', 128)
        .notNullable() //creates a name column as a string with 128 characters that is unique
  })
};

//this should remove our cohorts table
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};
