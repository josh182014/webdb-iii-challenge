
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function (students) { //creating a table with an id field, name and cohort id
        students.increments() //increment creates a primary key called id that auto-increments
        students
            .string('name', 128)
            .notNullable() //creates a name column as a string with 128 characters that is unique
        students
            .integer('cohort_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cohorts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
