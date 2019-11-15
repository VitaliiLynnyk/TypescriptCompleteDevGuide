import { User } from './models/User';

const user = new User({ name: 'myUser', age: 10 });

user.on('change', () => {
  console.log('lol');
});

console.log(user);
