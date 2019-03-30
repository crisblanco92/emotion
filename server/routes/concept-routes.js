const express = require('express');
const router = express.Router();

const Concepts = require('../models/Concepts')
const Pair = require('../models/Pair')


router.get('/getAllConceptNames', (req, res, next) => {
    Pair.find()
        .populate({ path: 'pairOfConcepts.concept1', select: 'name' })
        .populate({ path: 'pairOfConcepts.concept2', select: 'name' })

    .then(data => res.json(data))
        .catch(err => console.log(err))
})




module.exports = router;