const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const env = require('./env');


env();
const app = express();

const UserController = require('./controllers/user');

app.use(bodyParser.json({
    limit: '25mb',
}));
bodyParser.urlencoded({
    extended: true,
    limit: '25mb',
});

app.use('/', UserController);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useMongoClient: true,
}).then(() => {
    console.log('Connected to Database.');
}).catch((err) => {
    console.log(err.stack.toString());
});

app.listen(process.env.PORT);
console.log('App Runs on ');
console.log(process.env.PORT);