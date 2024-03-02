export default function NoteItem({ item, onDeleteItem, onArchiveItem }) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };

  const formattedDate = new Date(item.createdAt).toLocaleString(
    "id-ID",
    options
  );

  return (
    <div
      className="col-span-4 flex flex-col gap-4 bg-gradient-to-br from-neutral-700 to-neutral-800 px-4 py-6 rounded-2xl border border-neutral-500 hover:shadow-lg hover:shadow-neutral-800 hover:scale-[101%]"
      key={item.id}
    >
      <div>
        <h2 className="text-2xl font-semibold">{item.title}</h2>
        <p className="text-sm font-normal text-neutral-300">{formattedDate}</p>
      </div>

      <p className="h-48">{item.body}</p>

      <div className="flex gap-4 w-full">
        <button
          type="button"
          className="w-full py-3 px-2 flex gap-2 justify-center items-center font-semibold rounded-lg bg-gradient-to-br from-red-400 to-red-500"
          onClick={() => onDeleteItem(item.id)}
        >
          <i className="fa-solid fa-trash"></i> Hapus
        </button>
        <button
          type="button"
          className="w-full py-3 px-2 flex gap-2 justify-center items-center font-semibold rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600"
          onClick={() => onArchiveItem(item.id)}
        >
          <i className="fa-solid fa-box-archive"></i>
          {item.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}
