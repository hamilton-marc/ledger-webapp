import { Trackable } from './trackable.model';

/**
 * This class holds the properties for a Contact.  A contact
 * is a person or entity associated with a transaction.
 * Some examples are payees, vendors or investors.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export class Contact implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  name: string;
  description: string;
  accountNumber: string;

/* ToDo: replace these with actual class types */
  address: string;
  type: string;
  defaultCategory: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
