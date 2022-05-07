import { useContext } from "react";
import { BudgetContext } from "../utilities/budgetContext.js";

export default function BudgetList(props) {
  const { itemList, setItemList } = useContext(BudgetContext);

  function handleRemoveItemClick(id) {
    setItemList(itemList.filter((item, index) => index !== id && item));
  }

  return itemList.map((item, index) => {
    return (
      <tr
        key={index}
        className={item.source === "Income" ? "table-success" : "table-danger"}
      >
        <td align="left">
          {index} - {item.name}
        </td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td>{item.source}</td>
        <td className="align-middle">{item.gross}</td>
        <td className="align-middle">
          <button
            className="btn btn-sm btn-danger px-2 py-0"
            onClick={() => handleRemoveItemClick(index)}
          >
            &times;
          </button>
        </td>
      </tr>
    );
  });
}
