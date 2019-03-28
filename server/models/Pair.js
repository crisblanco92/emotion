const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    pairOfConcepts: [{
        concept1: { type: mongoose.Schema.Types.ObjectId, ref: 'Concepts' },
        concept2: { type: mongoose.Schema.Types.ObjectId, ref: 'Concepts' }
    }]
}, {
    timestamps: true
});

const Pair = mongoose.model('Pair', userSchema);
module.exports = Pair;