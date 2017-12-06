import compose from 'koa-compose';
import Router from 'koa-router';

import api from './api';
import about from './about';
import article from './article';

const router = new Router();

router.get('/', async (ctx, next) => {

    await ctx.render('index', {
        title: 'Koa2',
        message: 'Hello Koa2',
    })

})

router.use('/api', api.routes(), api.allowedMethods())
router.use('/about', about.routes(), about.allowedMethods())
router.use('/article', article.routes(), article.allowedMethods())

router.get('*', async (ctx, next) => {
    ctx.throw(404);
})

<<<<<<< HEAD
=======
// export default router
>>>>>>> cabc11fef112e5caf377cbed453763eee983062d
export default function routes() {
    return compose([
        router.routes(),
        router.allowedMethods()
    ])
}