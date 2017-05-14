# koa-deploy (for koa2)

[![Build Status](https://travis-ci.org/explooosion/koa-deploy.svg?branch=master)](https://travis-ci.org/explooosion/koa-deploy)
[![dependencies Status](https://david-dm.org/explooosion/koa-deploy.svg)](https://david-dm.org/)



## Tech Stack
+ template for koa2
+ ES6/ES7 with Babel
+ ejs template
+ mocha
  
## Koa Package
+ koa
+ koa-router
+ koa-views  
+ koa-bodyparser
+ koa-compose
+ koa-logger
  
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
+  - [x] mocha test
+  - [ ] session
+  - [ ] webpack 
+  - [ ] vue.js 
+  - [ ] react.js 
 
## License
MIT
