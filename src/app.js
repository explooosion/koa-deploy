'use strict';

// koa
import Koa from 'koa';
import views from 'koa-views';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

// unit
import middleware from './middleware';
import routes from './routes';

const app = new Koa();

app.use(logger());
app.use(bodyParser())
app.use(views(__dirname + '/view', {
    extension: 'ejs'
}));

app.use(middleware())

//app.use(routes.routes(), routes.allowedMethods());
app.use(routes());

app.listen(3000);

export default app