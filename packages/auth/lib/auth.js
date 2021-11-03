'use strict';

const api = require('@mrt/api')

module.exports = auth;

function auth() {
    console.log(api())
}


auth()