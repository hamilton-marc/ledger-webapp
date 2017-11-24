import { Trackable } from './trackable.model';

export class Company implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  name: string;
  description: string;
/* ToDo: replace these with actual class types */
  address: string;
  type: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
