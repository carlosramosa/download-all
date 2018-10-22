# DOWNLOADER MULTIFORMAT


This module allows you to download any file, specifying its URL, its format and, optionally, the destination path (by default the root of the project)

* INSTALL
```js
npm i downloader-multiformat
```
* USAGE

```js
const DownloaderMultiformat = require('download-multiformat);
```
```js
const iTermDownload = {
    url: 'https://iterm2.com/downloads/stable/latest'
    , name: 'iTerm2'
    , path: `${process.cwd()}/downloads`
};

DownloaderMultiformat(iTermDownload);

```
