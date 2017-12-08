/**
 * This enum represents a reference type in
 * our application.  Each reference type has an associated
 * reference definition file.  This is used to format the
 * reference.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export const enum ReferenceType {
  None = "None",
  Debit = "Debit",
  Check = "Check",
  ServiceCharge = "Service Charge",
  Withdrawl = "Withdrawl",
  Contribution = "Contribution",
  Other = "Other"
}
