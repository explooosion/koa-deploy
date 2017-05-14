'use strict';

import Router from 'koa-router';


// const router = new Router();
const router = Router({
    prefix: '/'
});

router.get('about', async(ctx, next) => {
    ctx.body = 'about page';
});

export default router;