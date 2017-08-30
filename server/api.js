'use strict';
/* eslint-disable new-cap */
const axios = require('axios')
const router = require('express').Router();


router.get('/blogs', (req, res, next) => {
    axios.get('https://medium.com/@oliviaoddo/latest', {header: {
        'Accept': 'application/json'
    }})
    .then(blogs => {
        const data = blogs.data.slice(16)
        res.send(data)
    })
    .catch(err => {
        res.sendStatus(err.status);
    });
});


module.exports = router;


