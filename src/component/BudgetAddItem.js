import { useState, useEffect, useRef, useContext } from "react";
import useBudgetCalc from "../utilities/useBudgetCalc.js";

import { BudgetContext } from "../utilities/budgetContext.js";

export default function BudgetAddItem() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [itemSource, setItemSource] = useState("Income");
  const [itemGross, setItemGross] = useState(0);

  const itemInputRef = useRef();

  const { itemList, setItemList, validateItem, setValidateItem } = useContext(
    BudgetContext
  );

  const { grossItem } = useBudgetCalc();

  useEffect(() => {
    setItemGross(grossItem(itemQuantity, itemPrice));
  }, [itemQuantity, itemPrice, grossItem]);

  function handleAddItemClick() {
    if (itemName !== "") {
      setItemList([
        ...itemList,
        {
          name: itemName,
          quantity: itemQuantity,
          price: itemPrice,
          source: itemSource,
          gross: itemGross
        }
      ]);
      // clear item previous details
      setItemName("");
      setItemQuantity("");
      setItemPrice("");
      setItemGross("");
      setValidateItem(false);
    } else {
      setValidateItem(true);
    }
    itemInputRef.current.focus();
  }

  return (
    <>
      <tr>
        <td className={!validateItem ? "" : "was-validated"}>
          <input
            type="text"
            name="itemName"
            placeholder="Enter Item"
            className="form-control"
            value={itemName}
            ref={itemInputRef}
            onChange={(e) => {
              setItemName(e.target.value);
              setValidateItem(false);
            }}
            required
          />
        </td>
        <td>
          <input
            type="number"
            size="20"
            name="itemQuantity"
            placeholder="Enter Quantity"
            className="form-control"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            name="itemPrice"
            placeholder="Enter Price"
            className="form-control"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </td>
        <td>
          <select
            name="selectAccount"
            className="form-select"
            onChange={(e) => setItemSource(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </td>
        <td className="align-middle">{itemGross}</td>
        <td className="align-middle">
          <button
            className="btn btn-sm btn-primary"
            onClick={handleAddItemClick}
          >
            Add Item
          </button>
        </td>
      </tr>
    </>
  );
}
