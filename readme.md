# DOWNLOADER MULTIFORMAT


This module allows you to download any file, specifying its URL, its format and, optionally, the destination path (by default the root of the project)

* OPTIONS

    **name**: the name of the file to download

    **url**: origin of the file to download

    **format**: file format to download

    **path**: where the file will be downloaded

* INSTALL
```js
npm i downloader-multiformat
```
* USAGE

```js
const DownloaderMultiformat = require('downloader-multiformat');

DownloaderMultiformat({
    name: 'iTerm2'
    , url: 'https://iterm2.com/downloads/stable/latest'
    , format: 'zip'
    , path: `${process.cwd()}/downloads`
});


```

or


```js
const DownloaderMultiformat = require('downloader-multiformat');

const downloadiTerm2 = () =>
    DownloaderMultiformat(
        {
            name: 'iTerm2'
            , url: 'https://iterm2.com/downloads/stable/latest'
            , format: 'zip'
            , path: `${process.cwd()}/downloads`
        }
    );

const downloadDocker = () =>
    DownloaderMultiformat(
        {
            name: 'docker'
            , url: 'https://download.docker.com/mac/stable/Docker.dmg'
            , format: 'dmg'
            , path: `${process.cwd()}/downloads`
        }
    );

const downloadSublimeText2 = () =>
    DownloaderMultiformat(
        {
            name: 'SublimeText2'
            , url: 'https://download.sublimetext.com/Sublime%20Text%202.0.2.dmg'
            , format: 'dmg'
            , path: `${process.cwd()}/downloads`
        }
    );


downloadiTerm2();
downloadDocker();
downloadSublimeText2();

```
