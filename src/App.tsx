import { useState } from "react";
import { items } from "./types/app";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
export default function App() {
  const [addItems, setAddItems] = useState<items[]>([] as items[]);
  function handleAddItems(addItems:items) {
    setAddItems((a) => [...a, addItems]);
  }
 
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList addItems={addItems} setAddItems={setAddItems} />
      <Stats addItems={addItems} />
    </div>
  );
}
