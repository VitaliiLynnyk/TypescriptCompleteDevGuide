import { User } from './models/User';

const user = new User({ name: 'myUser', age: 10 });

user.on('change', () => {
  console.log('ch 1');
});

user.on('change', () => {
  console.log('ch 2');
});

user.on('save', () => {
  console.log('save was triggered');
});

user.trigger('change');
