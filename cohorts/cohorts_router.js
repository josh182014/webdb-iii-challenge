const knex = require('knex')

const router = require('express').Router();
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

router.get('/', (req, res) => {
    res.status(200).json('Good job')
})

module.exports = router;