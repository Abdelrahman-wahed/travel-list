import { items } from "../types/app";

type ItemsProps = items & {
  setAddItems: (updateFn: (items: items[]) => items[]) => void;
}
const Items = ({ description, quantity, packed, id, setAddItems }:ItemsProps) => {
  function handleDeleteItems(id:number) :void{
    setAddItems((items:items[]):items[] => items.filter((d) => d.id !== id));
  }
  function handlePacked(id:number) {
    setAddItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <li  className={packed ? "packed" : ""}>
      <input
        type="checkbox"
        name="check"
        checked={packed}
        onChange={() => handlePacked(id)}
      />

      {quantity + " " + description}

      <button onClick={() => handleDeleteItems(id)}>❌</button>
    </li>
  );
};

export default Items;
