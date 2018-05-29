/**
 * This class represents the concept of a transaction type.
 * There are 4 different types of transactions:
 *
 * - Revenue
 * - Contribution
 * - Expense
 * - Withdrawl
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export enum TransactionType {
  None = 'None',
  Revenue = 'Revenue',
  Contribution = 'Contribution',
  Expense = 'Expense',
  Withdrawl = 'Withdrawl'
}
