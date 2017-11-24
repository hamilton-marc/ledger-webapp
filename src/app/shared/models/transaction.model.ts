import { Trackable } from './trackable.model';

export class Transaction implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  numberCode: string;
  transactionDate: Date;
  description: string;
  amount: number;

/* ToDo: replace these with actual class types */
  type: string;
  contact: string;
  category: string;
  jobCode: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
