function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="top-controls"
      type="text"
      placeholder="Search by title or author"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
