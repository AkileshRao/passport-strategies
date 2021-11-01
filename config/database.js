const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/passport-jwt');

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
