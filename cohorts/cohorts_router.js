const knex = require('knex')

const router = require('express').Router();
const knexConfig = require('../knexfile')

const Cohorts = require('./cohorts_model')
// const db = knex(knexConfig.development)

router.get('/', (req, res) => {
    Cohorts.find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json("Server Error")
    })
})

router.post('/', (req, res) => {
    if(req.body.name) {
        Cohorts.insert(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Server Error", err: error})
        })
    }
    else {
        res.status(400).json("Please provide a cohort name.")
    }
})

router.get('/:id', (req, res) => {
    Cohorts.getById(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json("Server Error")
    }) 
})

router.get('/:id/students', (req, res) => {
    Cohorts.getStudentsByCohortId(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json("Server Error")
    }) 
})

module.exports = router;