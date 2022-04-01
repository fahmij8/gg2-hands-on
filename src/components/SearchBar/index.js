function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <>
            <input
                type="text"
                className="App-Input"
                placeholder="Type your search here"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            ></input>
            <button className="App-Button">Search</button>
        </>
    );
}

export default SearchBar;
