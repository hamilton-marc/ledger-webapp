import { Trackable } from './trackable.model';
import { JobCode } from './job-code.model';

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
