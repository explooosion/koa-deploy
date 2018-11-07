# Koa Deploy

## Getting Start

```sh
npm install koa-deploy -g
```

```sh
koa-deploy -i PROJECT-NAME
```

```sh
cd PROJECT-NAME
```

```sh
npm install
```

## Run

### Production

Start with pm2.

```sh
npm start
```

1. auto open in browser (option)
2. http://127.0.0.1/

Stop the server.

```sh
npm run stop
```

### Development

```sh
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
