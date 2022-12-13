const express = require('express');
const router = express.Router();
const request = require('request');
const queryString = require('queryString');

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.get('/callback', async (req, res) => {
    const { code } = req.query;
    await request({
        uri: 'https://github.com/login/oauth/access_token',
        qs: { 
            client_id: '8c0b7400cc64a52fa49a',
            client_secret: '4d0d22693723166f8df86f3cbd4fb0afbc6dcc44',
            code
        }
    }, async (error, response, body) => {
            const { access_token } = queryString.parse(body);
            req.session.access_token = access_token;
            res.redirect('/');
        })
    })

module.exports = router;



