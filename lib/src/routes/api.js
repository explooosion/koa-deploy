import Router from 'koa-router';
import Todo from '../models/Todo';

let todos = [
  new Todo('todo1', 'Clean room.', false),
  new Todo('todo2', 'Take care.', false),
  new Todo('todo3', 'Wash clothes.', true),
];

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    status: 'success',
  };
});

router.get('/todo', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = todos;
});

router.put('/todo', async (ctx, next) => {
  const { id, item, done } = ctx.request.body;
  todos.push(new Todo(id, item, done));
  ctx.status = 200;
});

router.post('/todo', async (ctx, next) => {
  const { id, item, done } = ctx.request.body;
  todos.push(new Todo(id, item, done));
  ctx.status = 200;
});

router.delete('/todo', async (ctx, next) => {
  const { id } = ctx.request.body;
  todos = todos.filter((td) => { return td.id !== id; });
  ctx.status = 200;
});

router.patch('/todo', async (ctx, next) => {
  todos = todos.map((td) => {
    const { id, item, done } = ctx.request.body;
    return td.id === id ? new Todo(id, item, done) : td;
  });
  ctx.status = 200;
});

export default router;
