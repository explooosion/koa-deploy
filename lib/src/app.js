require('dotenv').config();

// koa
import Koa from 'koa';
import views from 'koa-views';
import mount from 'koa-mount';
import serve from 'koa-static';
import logger from 'koa-logger';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import open from 'open';

// unit
import middleware from './middleware';
import routes from './routes';

const app = new Koa();

app.use(logger());
app.use(bodyParser());

app.use(mount('/', convert(serve(`${__dirname}/public/`))));

app.use(views(`${__dirname}/view/`, {
  extension: 'html',
}));

app.use(middleware());
app.use(routes());

app.listen(
  process.env.SRV_PORT,
  () => {
    console.log(`✅  The server is running at http://localhost:${process.env.SRV_PORT}/`);
    // open(`http://localhost:${env.port}/`);
  }
);

export default app;
