const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    type: {
        type:String, enum: ["emotional", "rational"],
    },
    name: String,
    imageURL: String,
    center: String,
    speed: String
}, {
    timestamps: true
});

const Concepts = mongoose.model('Concepts', userSchema);
module.exports = Concepts;