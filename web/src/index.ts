import { User } from './models/User';

const user = new User({ name: 'myUser', age: 10 });

console.log(user.get('age'));
console.log(user.set({ age: 999 }));
console.log(user.get('age'));
