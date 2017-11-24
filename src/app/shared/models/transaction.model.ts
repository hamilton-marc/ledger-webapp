import { Trackable } from './trackable.model';

/**
 * This class represents the concept of a transaction in
 * our application.  A transaction represents a financial
 * activity that has occurred in a company.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

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
