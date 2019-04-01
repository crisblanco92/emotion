const express = require('express');
const router = express.Router();

const Concepts = require('../models/Concepts')
const Pair = require('../models/Pair')
const User = require('../models/User');


router.get('/getAllConceptNames', (req, res, next) => {
    Pair.find()
        .populate({ path: 'pairOfConcepts.concept1' })
        .populate({ path: 'pairOfConcepts.concept2' })

    .then(data => res.json(data))
        .catch(err => console.log(err))
})


// router.post("/postAnswers", (req, res) => {
//    // console.log(req.body);
    
//     Concepts.create(req.body)
//         .then(concept => {
//             console.log(concept);
//             User.findByIdAndUpdate(req.user._id, {$push:{concepts:concept._id}})
//             .then(user => {
//                 res.json({msg:"Todo fue bien, :D"})
//             })
//         })
//         .catch(err => console.log(err))
// })

router.post('/postAnswers', (req, res, next) => {
    console.log('no se si he recibido algo pero lo imprimo', req.body, 'id usuario:', req.user._id)
    User.findByIdAndUpdate(req.user._id, {concepts: req.body.arr })
        .then(response => {console.log(response), res.json(response)})
        .catch(err => console.log(err))
})




module.exports = router;