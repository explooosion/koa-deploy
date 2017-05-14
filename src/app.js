'use strict';

import Koa from 'koa';
import middleware from './middleware';
import Router from './routes';
import Logger from 'koa-logger';

const app = new Koa();

//configure custom middleware
app.use(middleware())


// Middleware - Error
// app.use((ctx, next) => {
//     try {
//         next();
//     } catch (err) {
//         ctx.response.status = err.status || 500;
//         ctx.body = err.message;
//     }
// });

app
    .use(Router())
    .use(Logger());

app.listen(8080);

export default app;