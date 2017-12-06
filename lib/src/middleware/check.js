export default function checkauth() {
    return async (ctx, next) => {

<<<<<<< HEAD
        if (true === 0 ||
            ctx.path === '/' ||
            ctx.path.indexOf('/api') >= 0 ||
            ctx.path.indexOf('/about') >= 0
        ) {
            await next()
        } else {
            ctx.throw(401);
        }
=======
        // if (1 == 1 ||
        //     ctx.path === '/' ||
        //     ctx.path.indexOf('/api') >= 0 ||
        //     ctx.path.indexOf('/about') >= 0
        // ) {
        //     await next()
        // } else {
        //     ctx.throw(401);
        // }
>>>>>>> cabc11fef112e5caf377cbed453763eee983062d

    }
}