import { Trackable } from './trackable.model';

export class TaxCode implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  form: string;
  line: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
