import { useState, useEffect, useContext } from "react";
import useBudgetCalc from "../utilities/useBudgetCalc.js";
import { BudgetContext } from "../utilities/budgetContext.js";
import { PieChart } from "react-minimal-pie-chart";

export default function BudgetVisualize() {
  const [spendTotal, setSpendTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [chartData, setChartData] = useState([]);

  const { grossExpense, grossIncome } = useBudgetCalc();

  const { itemList, itemTotal } = useContext(BudgetContext);

  const defaultLabelStyle = {
    fill: "#333",
    fontSize: "5px",
    fontFamily: "sans-serif"
  };

  useEffect(() => {
    setSpendTotal(grossExpense(itemList));
    setIncomeTotal(grossIncome(itemList));
    localStorage.setItem("item_list", JSON.stringify(itemList));
  }, [grossExpense, grossIncome, itemList]);

  useEffect(() => {
    const chartFilterData = itemList.map((item) => {
      let newColor = item.source === "Income" ? "#198754" : "#dc3545";
      return {
        name: item.name,
        value: item.gross,
        color: newColor
      };
    });
    setChartData(chartFilterData);
  }, [itemList]);

  return (
    <div className="row">
      <div className="col-6">
        <h6 className="mt-3">Income/Expense distribution</h6>
        {itemTotal === 0 ? (
          <p>No item to visualize</p>
        ) : (
          <PieChart
            radius={35}
            lineWidth={40}
            paddingAngle={5}
            data={chartData}
            label={({ dataEntry }) => `${dataEntry.value}`}
            labelStyle={{ ...defaultLabelStyle }}
            labelPosition={110}
            animate
          />
        )}
      </div>
      <div className="col-6">
        <p className="pt-3">
          <span>
            Total Income <span className="badge bg-success">{incomeTotal}</span>
          </span>
          <span className="px-3">
            Total Expense <span className="badge bg-danger">{spendTotal}</span>
          </span>
        </p>
        {itemTotal === 0 ? (
          <p>No item visualize</p>
        ) : (
          <PieChart
            radius={30}
            lineWidth={40}
            paddingAngle={0}
            startAngle={180}
            lengthAngle={180}
            data={[
              {
                title: "Income",
                value: incomeTotal,
                color: "#198754"
              },
              {
                title: "Expense",
                value: spendTotal,
                color: "#dc3545"
              }
            ]}
            label={({ dataEntry }) => `${dataEntry.value}`}
            labelStyle={{ ...defaultLabelStyle }}
            labelPosition={110}
            animate
          />
        )}
      </div>
    </div>
  );
}
