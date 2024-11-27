import { randomUUID } from "crypto";

interface ProductionProps {
  animalId: string;
  date: Date;
  goal: string;
  price: number;
}

export default class Production {
  private _id: string;
  private props: ProductionProps; 

  constructor(props: ProductionProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public get animalId() {
    return this.props.animalId;
  }

  public get date() {
    return this.props.date;
  }

  public get goal() {
    return this.props.goal;
  }

  public get price() {
    return this.props.price;
  }
}