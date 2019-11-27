import { User } from './models/User';
import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'Name', age: 10 });
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);

  // const userForm = new UserForm(root, user);
  // userForm.render();
} else {
  throw new Error('Root el not found');
}
