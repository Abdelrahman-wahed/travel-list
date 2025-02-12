import { useState } from "react";
import { items } from "../types/app";

const Form = ({ onAddItems }:{
  onAddItems : (e:items)=> void
}) => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);


  function handleData(e:React.MouseEvent<HTMLButtonElement>):void {
    e.preventDefault();
    if (!description) return;
    const newItem:items = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form ">
      <h3>What do you need for your 😍 trip?</h3>

      <select
        name="qaunt"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((itm) => {
          return (
            <option value={itm} key={itm}>
              {itm}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        name="add"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" onClick={handleData}>
        ADD
      </button>
    </form>
  );
};

export default Form;
