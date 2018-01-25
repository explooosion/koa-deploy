import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = {
        'status': 'about home'
    }
})

router.get('me', async (ctx, next) => {
    ctx.body = 'about me page';
});

export default router;