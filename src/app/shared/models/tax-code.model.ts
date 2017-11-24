import { Trackable } from './trackable.model';

/**
 * This class holds the tax form and line items.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export class TaxCode implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  form: string;
  line: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
