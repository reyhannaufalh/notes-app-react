import NoteItem from "./NoteItem";

export default function ActiveNotes({
  items,
  searchKeyword,
  onDeleteItem,
  onArchiveItem,
}) {
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      !item.archived
  );

  const hasItemsToShow = filteredItems.length > 0;

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <h2 className="title">Catatan Aktif</h2>

      {hasItemsToShow ? (
        <div className="grid grid-cols-12 gap-4">
          {filteredItems.map((item) => (
            <NoteItem
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onArchiveItem={onArchiveItem}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-neutral-300">
          {searchKeyword
            ? "Tidak ada catatan yang sesuai dengan kata kunci pencarian."
            : "Belum ada catatan yang tersedia."}
        </div>
      )}
    </div>
  );
}
