import BudgetAnalyserUI from "./BudgetAnalyzerUI.js";
import { BudgetProvider } from "../utilities/budgetContext";
import BudgetVisualize from "./BudgetVisualize";

export default function BudgetAnalyser() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Refactor React Spend Analyzer</h1>
            <BudgetProvider>
              <BudgetAnalyserUI />
              <BudgetVisualize />
            </BudgetProvider>
          </div>
        </div>
      </div>
    </>
  );
}
