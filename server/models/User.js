const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    username: String,
    age: Number,
    location: String,
    test: {
        concepts: [{type:Schema.Types.ObjectId, ref: "Concepts"}],
        velocity: {
            rational: Number, 
            emotional: Number
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;