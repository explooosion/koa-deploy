export default function checkauth() {
    return async (ctx, next) => {

        if (true === 0 ||
            ctx.path === '/' ||
            ctx.path.indexOf('/api') >= 0 ||
            ctx.path.indexOf('/about') >= 0
        ) {
            await next()
        } else {
            ctx.throw(401);
        }

    }
}