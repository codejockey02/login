const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: mongoose.Schema.Types.String,
    uname: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
}, {
    timestamp: true,
});

module.exports = mongoose.model('user', schema);