import { useState } from "react";

export default function Form({ items, onAddItem }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 50;

  function handleTitleChange(e) {
    const inputValue = e.target.value;
    if (inputValue.length <= maxTitleLength) {
      setTitle(inputValue);
    }
  }

  const remainingCharacters = maxTitleLength - title.length;

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !body) return;

    const lastItemId = items.length > 0 ? items[items.length - 1].id : 0;

    const currentDate = new Date();

    const newItem = {
      id: lastItemId + 1,
      title,
      body,
      createdAt: currentDate,
      archived: false,
    };
    onAddItem(newItem);

    console.log(newItem);

    setTitle("");
    setBody("");
  }

  return (
    <div className="max-w-3xl border mx-auto border-neutral-500 rounded-2xl px-4 py-6 bg-neutral-800 mt-28">
      <h2 className="title">Tambahkan Catatan Baru</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Ini adalah judul ..."
            className="input-main"
            value={title}
            onChange={handleTitleChange}
          />

          <p className="mt-2 text-sm">Sisa karakter: {remainingCharacters}</p>
        </div>

        <textarea
          id="message"
          cols="30"
          rows="6"
          placeholder="Tuliskan catatan..."
          className="input-main"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button className="p-3 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-lg font-semibold text-lg ">
          Tambah Catatan
        </button>
      </form>
    </div>
  );
}
