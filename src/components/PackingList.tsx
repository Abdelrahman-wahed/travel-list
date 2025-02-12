import { useState } from "react";
import { items } from "../types/app";
import Item from "./Item";
type PackingListProps ={
  addItems:items[],
  setAddItems:(updateFn: (items: items[]) => items[]) => void
}
const PackingList = ({ addItems, setAddItems }:PackingListProps) => {
  const [sortedBy, setSortedBy] = useState<"input"|"desc"|"packed">("input");


  let sortedItems: items[] = [];
  if (sortedBy === "input") sortedItems = addItems;
  if (sortedBy === "desc")
    sortedItems = addItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortedBy === "packed")
    sortedItems = addItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  let items = sortedItems.map((item) => (
    <Item {...item} key={item.id} setAddItems={setAddItems} />
  ));
  function handleClear() {
    let confirmed = window.confirm("Are You Sure ?");
    if (confirmed) setAddItems(() => []);
  }
  return (
    <div className="list">
      <ul>{items}</ul>

      <div className="actions">
        <select
          name=""
          id=""
          value={sortedBy}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => setSortedBy(e.target.value as "input" | "desc" | "packed")}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="desc">SORT BY DISCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={handleClear}>CLEAR LIST</button>
      </div>
    </div>
  );
};

export default PackingList;
