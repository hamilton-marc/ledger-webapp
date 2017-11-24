import { Trackable } from './trackable.model';

/**
 * This class represents some type of geographical address such as
 * a billing or mailing address.  It includes all of the standard
 * fields that an address would have including a country field for
 * International customers.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export class Address implements Trackable {
/* ToDo: Consider putting this in a superclass */
  id: number;

  street: Array<string>;
  city: string;
  stateProvince: string;
  zipPostal: string;
  country: string;
  phone: string;
  fax: string;
  email: string;
  website: string;

/* ToDo: Consider putting these in a superclass */
  createdAt: Date;
  updatedAt: Date;
}
