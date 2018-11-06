class Todo {
  id = 'todo1';

  item = '';

  done = false;

  constructor(id, item, done) {
    this.id = String(id);
    this.item = String(item);
    this.done = Boolean(done);
  }
}

export default Todo;
