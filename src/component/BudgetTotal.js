import { useEffect, useContext } from "react";
import useBudgetCalc from "../utilities/useBudgetCalc.js";
import { BudgetContext } from "../utilities/budgetContext.js";

export default function BudgetTotal() {
  const { itemList, itemTotal, setItemTotal, validateItem } = useContext(
    BudgetContext
  );

  const { grossTotal } = useBudgetCalc();

  useEffect(() => {
    setItemTotal(grossTotal(itemList));
  }, [itemList, grossTotal, setItemTotal]);
  return (
    <>
      <tr className="table-dark">
        <td colSpan="3" align="left">
          {validateItem && (
            <span className="text-danger">Please enter Item Name.</span>
          )}
        </td>
        <td align="right">
          <b>Total Saving $</b>
        </td>
        <td>
          <b>{itemTotal}</b>
        </td>
        <td></td>
      </tr>
    </>
  );
}
