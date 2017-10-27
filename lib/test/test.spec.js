'use strict';

import test from 'tape';
import Koa from 'koa';
import supertest from 'supertest';

const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello World';
});

let server, request;

test('Start server', t => {
    server = app.listen();
    request = supertest(server);
    t.end();
})

test('Koa test', t => {
    request
        .get('/')
        .expect(200)
        .end((err, res) => {
            if (err) throw err;
            t.end();
        });
});

test('Shutdown server', t => {
    server.close();
    t.end();
});