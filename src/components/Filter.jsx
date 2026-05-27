function Filter({ genreFilter, setGenreFilter }) {
  return (
    <select
      value={genreFilter}
      onChange={(e) => setGenreFilter(e.target.value)}
    >
      <option value="">All Genres</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Finance">Finance</option>
      <option value="Self Help">Self Help</option>
      <option value="Fiction">Fiction</option>
    </select>
  );
}

export default Filter;
