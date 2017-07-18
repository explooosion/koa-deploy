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
  
## Koa Package
+ koa
+ koa-router
+ koa-views  
+ koa-bodyparser
+ koa-compose
+ koa-logger
+ koa-mount
+ koa-static
+ koa-convert
  
## Getting Start - one way
```
git clone https://github.com/explooosion/koa-deploy.git
cd koa2-deploy
npm install
npm start
```

## Getting Start - two way
```
npm install koa-deploy
move koa-deploy's all file from node_modules to '/'
npm start
```

1. open in browser
2. http://127.0.0.1:3000/
  
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
- [x] mocha test
- [x] gulp task
- [ ] webpack
- [x] Angular4
  
## License
MIT
