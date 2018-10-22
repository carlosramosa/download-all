'use strict';

const request = require('request-promise');
const fs = require('fs');

module.exports = ({ name, url, format, path = process.cwd()}) =>
    request(url)
    .pipe(fs.createWriteStream(`${path}/${name}.${format}`))
    .on('close', () => {
        console.log(`${name}.zip written`);
    });

