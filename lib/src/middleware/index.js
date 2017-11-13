import compose from 'koa-compose';
import checkauth from './check';

export default function middleware() {
    return compose([
        // checkauth()
    ])
}