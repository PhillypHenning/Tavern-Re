const path = require('path');

const HOME_DIR = path.join(__dirname, '..')

const ROUTES_HOME = path.join(HOME_DIR, 'routes');
const VIEWS_HOME = path.join(HOME_DIR, 'views');


// =+ Test assest +=
const user = {
    'name': 'test user',
    'username': 'test username',
    'phone': '123 456 7890',
    'email': 'test_user@gmail.com',
    'address': '123 street'
};

module.exports = { user }