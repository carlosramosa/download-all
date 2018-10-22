'use strict';

const request = require('request-promise');
const fs = require('fs');

module.exports = name => url =>
    request(url)
    .pipe(fs.createWriteStream(`${process.cwd()}/${name}.zip`))
    .on('close', () => {
        console.log(`${name}.zip written`);
    });

