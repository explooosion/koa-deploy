'use strict';

//import fs from 'fs';
//import path from 'path';
import compose from 'koa-compose';
import Router from 'koa-router';

import RouterMain from './main';
import RouterAbout from './about';
import RouterArticle from './articles';

const router = new Router();


router.get('/', async(ctx, next) => {
    // ctx.type = 'html'
    // ctx.body = require('fs').createReadStream(__dirname + '/../public/main.html')
    await ctx.render('./main')
})

router.use(RouterMain.routes(), RouterMain.allowedMethods())
router.use('/about', RouterAbout.routes(), RouterAbout.allowedMethods())
router.use('/article', RouterArticle.routes(), RouterArticle.allowedMethods())


router.get('*', async(ctx, next) => {
    ctx.body = {
        status: 404
    }
})


/* 
[ One way to get all router ]

fs
    .readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) && (file.split('.').slice(-1)[0] === 'js') && file !== 'index.js'
    )
    .forEach(file => {
        console.log(file);
        const route = require(path.join(__dirname, file));
        router.use(route.routes(), route.allowedMethods());
    });
*/
export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}