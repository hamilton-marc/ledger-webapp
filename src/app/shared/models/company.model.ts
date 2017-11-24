import { Trackable } from './trackable.model';

/**
 * This class represents the concept of a company in
 * our application.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

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
