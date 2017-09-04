'use strict';
/* eslint-disable new-cap */
const axios = require('axios');
const router = require('express').Router();
const mediumResponse = require('./data.js');

router.get('/blogs', (req, res, next) => {
    // res.send(mediumResponse)
    axios
        .get('https://medium.com/@oliviaoddo/latest', {
            header: {
                Accept: 'application/json'
            }
        })
        .then(blogs => {
            const data = blogs.data.slice(16)
            res.send(data);
        })
        .catch(err => {
            res.sendStatus(err.status);
        });
});

router.post('/contact', (req, res, next) => {
    res.sendStatus(200)
})

module.exports = router;
