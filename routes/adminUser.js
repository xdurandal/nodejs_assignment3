
const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/users',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','users.html'))
});

router.post('/users',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;

