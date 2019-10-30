import axios from 'axios';

const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
  const todo = res.data;

  const ID = todo.Id;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    todo with ${ID}
    title ${title}
    finished ${finished}
  `);
});
