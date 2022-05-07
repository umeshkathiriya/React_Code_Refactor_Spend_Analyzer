import BudgetAddItem from "./BudgetAddItem.js";
import BudgetTotal from "./BudgetTotal.js";
import BudgetList from "./BudgetList";

export default function BudgetAnalyzer() {
  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th align="left">Item</th>
            <th width="100">Quantity</th>
            <th width="120">Price</th>
            <th width="100">Income/Expense</th>
            <th width="100">Gross</th>
            <th width="100"></th>
          </tr>
        </thead>
        <tbody>
          <BudgetAddItem />
          <BudgetTotal />
          <BudgetList />
        </tbody>
      </table>
    </>
  );
}
