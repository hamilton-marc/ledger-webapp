import { Trackable } from './trackable.model';

/**
 * This class holds the properties for a JobCode.  A job code
 * allows a user to attach a specific job to a transaction.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export class JobCode implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  code: string;
  description: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
