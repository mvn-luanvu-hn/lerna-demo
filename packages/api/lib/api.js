'use strict';

const figlet = require('figlet');

module.exports = api;

function api() {
    return figlet.textSync('Hello Lerna')
}
