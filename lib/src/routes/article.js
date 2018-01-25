import Router from 'koa-router';

/**
 * /articles
 * /articles/
 * /articles/:id/author
 * /articles/:id/info
 */

const router = new Router();

router.get('/:id/author', async (ctx, next) => {
    ctx.body = 'article author page';
});

router.get('/:id/info', async (ctx, next) => {
    ctx.body = 'article info page';
});

router.get('/', async (ctx, next) => {
    ctx.body = 'article';
});

export default router;