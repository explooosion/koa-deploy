import compose from 'koa-compose';
import checkauth from './check';

export default function middleware() {
    return compose([
<<<<<<< HEAD
        checkauth()
=======
        // checkauth()
>>>>>>> cabc11fef112e5caf377cbed453763eee983062d
    ])
}