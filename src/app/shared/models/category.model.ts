import { Trackable } from './trackable.model';
import { JobCode } from './job-code.model';

/**
 * This class represents a categorization attribute
 * for a transaction.  Transactions must be categorized
 * for accounting purposes.  In general these fall into
 * either an income or expense bucket.
 *
 * Note that for the purposes of using accounting
 * terminology, a "category" is actually an "account"
 * (part of the Chart of Accounts).
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export class Category implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  parent: number;
  name: string;
  num: number;
  description: string;
  transactionType: string;
  /* Replace with some sort of Hashmap */
  taxCode: Array<JobCode>;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
