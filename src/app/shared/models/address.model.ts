export class Address {
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
