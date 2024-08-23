import { randomUUID } from "crypto";

interface ProductionControlProps {
  animalId: string;
  date: Date;
  goal: string;
  price: number;
}

export default class ProductionControl {
  private _id: string;
  private props: ProductionControlProps; 

  constructor(props: ProductionControlProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public set animalId(value: string) {
    this.props.animalId = value;
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