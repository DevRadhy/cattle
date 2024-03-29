import { randomUUID } from "crypto";

interface AnimalProps {
  identification: string;
  birthDate?: Date | null;
  fatherId?: string | null;
  motherId?: string | null;
  gender: number;
  weight?: number | null;
  description?: string | null;
  ownerId: string;
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

  public get birthDate() {
    return this.props.birthDate;
  }

  public get fatherId() {
    return this.props.fatherId;
  }

  public get motherId() {
    return this.props.motherId;
  }

  public get gender() {
    return this.props.gender;
  }

  public get weight() {
    return this.props.weight;
  }

  public get description() {
    return this.props.description;
  }

  public get ownerId() {
    return this.props.ownerId;
  }

  public set ownerId(id: string) {
    this.props.ownerId = id;
  }
}