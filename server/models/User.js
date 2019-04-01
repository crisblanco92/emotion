const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    username: String,
    age: Number,
    location: String,
    concepts: [{type:Schema.Types.ObjectId, ref: "Concepts"}]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;