import { User } from './models/User';

const user = new User({ id: 1, name: 'Name', age: 20 });

console.log(user.get('name'));
