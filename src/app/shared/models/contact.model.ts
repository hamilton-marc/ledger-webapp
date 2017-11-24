import { Trackable } from './trackable.model';

export class Contact implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  name: string;
  description: string;
  accountNumber: string;

/* ToDo: replace these with actual class types */
  address: string;
  contactType: string;
  defaultCategory: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
