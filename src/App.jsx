import { useState } from "react";
import ActiveNotes from "./components/ActiveNotes";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { getInitialData } from "./utils/index";
import ArchiveNotes from "./components/ArchiveNotes";

export default function App() {
  const [items, setItems] = useState(getInitialData);
  const [searchKeyword, setSearchKeyword] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleArchiveItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, archived: !item.archived } : item
      )
    );
  }

  return (
    <div className="w-full text-white pb-48">
      <Navbar setSearchKeyword={setSearchKeyword} />
      <Form items={items} onAddItem={handleAddItem} />
      <ActiveNotes
        items={items}
        searchKeyword={searchKeyword}
        onDeleteItem={handleDeleteItem}
        onArchiveItem={handleArchiveItem}
      />
      <ArchiveNotes
        items={items}
        searchKeyword={searchKeyword}
        onDeleteItem={handleDeleteItem}
        onArchiveItem={handleArchiveItem}
      />
    </div>
  );
}
