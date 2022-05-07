export default function useBudgetCalc() {
  function grossTotal(list) {
    const total = list.reduce((total = 0, current) => {
      if (current.source === "Income") {
        return (total += current.gross);
      } else {
        return (total -= current.gross);
      }
    }, 0);
    return total;
  }

  function grossExpense(list) {
    const totalExpense = list.reduce((total, current) => {
      if (current.source === "Expense") {
        total += current.gross;
      }
      return total;
    }, 0);
    return totalExpense;
  }

  function grossIncome(list) {
    const totalIncome = list.reduce((total = 0, current) => {
      if (current.source === "Income") {
        total += current.gross;
      }
      return total;
    }, 0);
    return totalIncome;
  }

  function grossItem(quantity, price) {
    return quantity * price;
  }

  return { grossItem, grossTotal, grossExpense, grossIncome };
}
