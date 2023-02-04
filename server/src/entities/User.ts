import { randomUUID } from "crypto";

export default class User {
  id: string;
  email: string;
  password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}