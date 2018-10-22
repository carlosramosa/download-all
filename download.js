'use strict';

const request = require('request-promise');
const fs = require('fs');

module.exports = ({ name, url, path = process.cwd()}) =>
    request(url)
    .pipe(fs.createWriteStream(`${path}/${name}.zip`))
    .on('close', () => {
        console.log(`${name}.zip written`);
    });

