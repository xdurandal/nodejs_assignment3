//Core Modules
const path = require('path');
//Third Party Imports
const express = require('express');
const bodyParser = require('body-parser');
//Custom Imports
const adminRoutes = require('./routes/adminUser')
const userRoutes = require('./routes/default')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(userRoutes);

app.listen(3000);
