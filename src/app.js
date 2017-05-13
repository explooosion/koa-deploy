import Koa from 'koa';
import Router from 'koa-router';
import Logger from 'koa-logger';
import Compose from 'koa-compose';

const app = new Koa();
const router = Router();

// Middleware - Error
app.use((ctx, next) => {
    try {
        next();
    } catch (err) {
        ctx.response.status = err.status || 500;
        ctx.body = err.message;
    }
});

router.get('/login', (ctx, next) => {
    ctx.body = "this is the login page";
});

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(Logger());

app.use((ctx, next) => {

    ctx.body = 'Hello World'
});

app.listen(80);

export default app;