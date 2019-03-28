const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    type: {
        enum: ["emotional", "rational"],
    },
    name: String,
    imageURL: "",
    center: String,
    speed: String

}, {
    timestamps: true
});

const Concepts = mongoose.model('Concepts', userSchema);
module.exports = Concepts;