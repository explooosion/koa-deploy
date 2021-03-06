# koa-deploy (for koa2)

[![Build Status](https://travis-ci.org/explooosion/koa-deploy.svg?branch=master)](https://travis-ci.org/explooosion/koa-deploy)
[![npm version](https://badge.fury.io/js/koa-deploy.svg)](https://badge.fury.io/js/koa-deploy)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/explooosion/koa-deploy/blob/master/LICENSE)

[Github - koa-deploy](https://github.com/explooosion/koa-deploy)

## Tech Stack

+ template for koa2
+ ES6/ES7 with Babel
+ ejs or jade(pug) template
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
  
## Getting Start

```bash
npm install koa-deploy -g
```

```bash
koa-deploy -i PROJECT-NAME
```

```bash
cd PROJECT-NAME
```

```bash
npm install
```

## Run

### Production

Start with pm2.

```bash
npm start
```

1. auto open in browser (option)
2. http://127.0.0.1/

Stop the server.

```bash
npm run stop
```

### Development

```bash
npm run dev
```

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
  
### API example

#### GET

[http://localhost/api/todo](http://localhost/api/todo)

#### POST, PUT, PATCH

[http://localhost/api/todo](http://localhost/api/todo)

```json
{
  "id": "todo2",
  "item": "Take care.",
  "done": true
}
```

#### DELETE

[http://localhost/api/todo](http://localhost/api/todo)

```json
{
  "id": "todo2"
}
```

## Feature

- [x] koa-deploy Cli
- [x] gulp task
- [x] mocha test

## License

MIT
