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
  id: string;
  props: AnimalProps; 

  constructor(props: AnimalProps, id?: string) {
    this.props = props;
    this.id = id ?? randomUUID();
  }
}