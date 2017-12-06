import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = {
<<<<<<< HEAD
        status: 'success'
=======
        'status': 'success'
>>>>>>> cabc11fef112e5caf377cbed453763eee983062d
    }
})

router.get('/app', async (ctx, next) => {
    ctx.body = {
<<<<<<< HEAD
        status: 'api app'
=======
        'status: ': 'api app'
>>>>>>> cabc11fef112e5caf377cbed453763eee983062d
    }
})

export default router;