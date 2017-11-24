import { Trackable } from './trackable.model';

export class JobCode implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  code: string;
  description: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
