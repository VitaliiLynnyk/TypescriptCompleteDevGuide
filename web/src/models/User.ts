interface UserProps {
  age: number;
  name: string;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
}
