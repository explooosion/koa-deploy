# koa-deploy (for koa2)

[![Build Status](https://travis-ci.org/explooosion/koa-deploy.svg?branch=master)](https://travis-ci.org/explooosion/koa-deploy)
[![dependencies Status](https://david-dm.org/explooosion/koa-deploy.svg)](https://david-dm.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/explooosion/koa-deploy/blob/master/LICENSE)


## Tech Stack
+ template for koa2
+ ES6/ES7 with Babel
+ ejs or jade(pug) template
+ Angular4 framework
+ mocha
+ gulp
+ pm2
  
## Koa Plugin
+ koa-router
+ koa-views  
+ koa-bodyparser
+ koa-compose
+ koa-logger
+ koa-mount
+ koa-static
+ koa-convert
  
## Getting Start - one way
```bash
npm install koa-deploy -g
koa-deploy -i PROJECT-NAME
cd PROJECT-NAME
npm install
npm start
```


1. auto open in browser
2. http://127.0.0.1/
  
## Directory
```
master
.
├── .babelrc
├── README.md
├── client
├── start.js
├── src
│   ├── middleware
│   ├── public
│   ├── routes
│   ├── view
│   └── app.js
├── package.json
└── test
    └── test.spec.js

```
  
## Feature
- [x] koa-deploy Cli
- [x] gulp task
- [x] Angular4
- [x] mocha test

## License
MIT
