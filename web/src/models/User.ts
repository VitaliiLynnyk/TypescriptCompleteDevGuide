import axios, { AxiosResponse } from 'axios';

import { Sync } from './Sync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  age?: number;
  name?: string;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
