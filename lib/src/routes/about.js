import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = {
<<<<<<< HEAD
        status: 'about home'
=======
        'status': 'about home'
>>>>>>> cabc11fef112e5caf377cbed453763eee983062d
    }
})

router.get('me', async (ctx, next) => {
    ctx.body = 'about me page';
});

export default router;