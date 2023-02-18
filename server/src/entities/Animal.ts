import { randomUUID } from "crypto";

interface AnimalProps {
  identification: string;
  fatherId?: string | null;
  motherId?: string | null;
  birthDate?: Date | null;
  weight?: number | null;
  description?: string | null;
}

export default class Animal {
  private _id: string;
  private props: AnimalProps; 

  constructor(props: AnimalProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public set identification(value: string) {
    this.props.identification = value;
  }

  public get identification() {
    return this.props.identification;
  }

  public get fatherId() {
    return this.props.fatherId;
  }

  public get motherId() {
    return this.props.motherId;
  }

  public get birthDate() {
    return this.props.birthDate;
  }

  public get weight() {
    return this.props.weight;
  }

  public get description() {
    return this.props.description;
  }
}