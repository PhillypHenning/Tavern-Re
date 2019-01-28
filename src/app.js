// =+Modules+=
const fs = require('fs');
const path = require('path');
const util = require('util'); // Provides timestamp
const express = require('express');
const settings = require('./conf/settings');
// const { accounts, users, writeJSON } = require('./data');

util.log(`Checking stuff: ${ __dirname }`);

// =+ Test assest +=
const user = {
    'name': 'test user',
    'username': 'test username',
    'phone': '123 456 7890',
    'email': 'test_user@gmail.com',
    'address': '123 street'
};


// =+Configuration+=
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // used to set css/js scripts directory
app.use(express.urlencoded({ extended: true })); // https://expressjs.com/en/api.html#express.urlencoded


// =+Routes+=
app.get('/', (req, res) =>{ res.render('index', { title: 'Tavern' }); });
app.get('/profile', (req, res) =>{ res.render('profile', { user }); });

app.listen(3000, () => util.log('Project running on port 3000...'));
