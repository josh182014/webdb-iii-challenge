const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    find,
    insert,
    getById,
    getStudentsByCohortId,
    // remove,
    update,
}

function find() {
    return db('cohorts')
}

function insert(cohort) {
    return db('cohorts')
    .insert(cohort)
}

function getById(id) {
    return db('cohorts').where({id})
    .first()
}

function getStudentsByCohortId(id) {
    return db('students').where({cohort_id: id })
}

function update(id, name) {
    console.log(id, name)
    return db('cohorts').where({id})
    .update(name)
}