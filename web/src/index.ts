import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Name', age: 10 });

const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();
