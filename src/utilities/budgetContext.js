import { useState, createContext } from "react";

const BudgetContext = createContext();

function BudgetProvider(props) {
  const [itemList, setItemList] = useState(
    () => JSON.parse(localStorage.getItem("item_list")) ?? []
  );
  const [validateItem, setValidateItem] = useState(false);
  const [itemTotal, setItemTotal] = useState(0);

  const value = {
    itemList: itemList,
    setItemList: setItemList,
    itemTotal: itemTotal,
    setItemTotal: setItemTotal,
    validateItem: validateItem,
    setValidateItem: setValidateItem
  };
  return (
    <BudgetContext.Provider value={value}>
      {props.children}
    </BudgetContext.Provider>
  );
}

export { BudgetContext, BudgetProvider };
