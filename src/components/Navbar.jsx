export default function Navbar({ setSearchKeyword }) {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 border-b border-neutral-500 mb-8 fixed backdrop-blur-2xl top-0 right-0 left-0 z-50">
      <p className="text-2xl font-semibold">Catatan Pribadi</p>

      <input
        type="text"
        id="search"
        placeholder="Cari catatan..."
        className="input-main w-fit"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </nav>
  );
}
