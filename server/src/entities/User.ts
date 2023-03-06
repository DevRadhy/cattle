import { randomUUID } from "crypto";

export interface UserProps {
  name: string;
  email: string;
  password: string;
}

export default class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public get email() {
    return this.props.email;
  }

  public get password() {
    return this.props.password;
  }
}