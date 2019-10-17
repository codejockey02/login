const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {
        name,
        uname,
        password,
    } = req.body;
    const newUser = new User({
        name,
        uname,
        password,
    });
    const check = await User.findOne({
        uname,
    }, {
        _id: 1,
    });
    if (check !== null) {
        res.json({
            error: true,
            code: null,
            output: 'Username should be unique',
        });
    } else {
        await newUser.save();
        res.json({
            error: false,
            code: null,
            output: 'Registered',
        });
    }
});

router.post('/login', async (req, res) => {
    const {
        uname,
        password,
    } = req.body;

    const check = await User.findOne({
        uname,
    }, {
        password: 1,
    });
    if (check === null) {
        res.json({
            error: true,
            code: null,
            output: 'User does not exists',
        });
    } else if (check.password !== password) {
        res.json({
            error: true,
            code: null,
            output: 'Incorrect Password',
        });
    } else {
        res.json({
            error: false,
            code: null,
            output: 'Authenticated',
        });
    }
});

module.exports = router;