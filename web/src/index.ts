import { User } from './models/User';

const user = new User({ id: 1, name: 'Name', age: 20 });

user.set({ name: 'new name' });
