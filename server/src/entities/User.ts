import { randomUUID } from "crypto";

export interface UserProps {
  name: string;
  email: string;
}

export default class User {
  id: string;
  props: UserProps;

  constructor(props: UserProps, id?: string) {
    this.props = props;
    this.id = id ?? randomUUID();
  }
}