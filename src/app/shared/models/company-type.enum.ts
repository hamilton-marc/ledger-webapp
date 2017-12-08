/**
 * This enum represents a report type in
 * our application.  Each report type has an associated
 * report definition file.  This is used to format the
 * report.
 *
 * @author Union Hills Software
 * @date   November 24, 2017
 *
 */

export const enum CompanyType {
  SoleProprietorship = "Sole Proprietorship",
  Partnership = "Partnership",
  S_Corporation = "S Corporation",
  C_Corporation = "C Corporation",
  LL_Partnership = "LL Partnership",
  LL_S_Corporation = "LL S Corporation",
  LL_C_Corporation = "LL C Corporation"
}
