'use strict';
/* eslint-disable new-cap */
const axios = require('axios');
const router = require('express').Router();
const mediumResponse = require('./data.js');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oliviaoddopersonalsite@gmail.com',
    pass: 'oliviaoddo.com'
  }
});

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
    let mailOptions = {
      from: `${req.body.email}`,
      to: 'olivia.oddo@gmail.com',
      subject: `${req.body.subject}`|| 'No Subject',
      text: `${req.body.message}`,
      html: `<h2>From: ${req.body.name} | ${req.body.email}</h2><h3>Subject: ${req.body.subject}</h3><h4>Message: ${req.body.message}</h4>`
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    });
})

module.exports = router;
