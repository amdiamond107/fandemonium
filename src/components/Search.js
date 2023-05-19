function Search({setSearchText, searchText}) {
  return (
    <div className="searchbar">
      <label htmlFor="/search_events">
      <h2>Search Events</h2>
      </label>
      <input
          type="text"
          id="search"
          placeholder="Search for an event..."
          onChange={(event) => {
            setSearchText(event.target.value)
          }}
          value={searchText}
      />
    </div>
  );
}

export default Search;