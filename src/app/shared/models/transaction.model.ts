export class Transaction {
/* ToDo: Consider putting this in a superclass */
  id: number;

  numberCode: string;
  transactionDate: Date;
  entryDate: Date;
  description: string;
  amount: number;

/* ToDo: replace these with actual class types */
  type: string;
  contact: string;
  category: string;
  jobCode: string;

/* ToDo: Consider putting these in a superclass */
  insertDate: Date;
  lastModifiedDate: Date;
}
