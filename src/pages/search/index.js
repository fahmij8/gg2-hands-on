import AppImage from "components/AppImage";
import { useState } from "react";

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(
        "Lets search something!"
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchResults("Searching...");
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchQuery}&limit=12`
        )
            .then((response) => response.json())
            .then((lists) => {
                if (lists.data.length === 0) {
                    setSearchResults("No results found");
                } else {
                    setSearchResults(lists.data);
                }
            })
            .catch((error) => {
                console.error(error);
                setSearchResults("Error Happened!");
            });
    };

    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type="text"
                    className="App-Input"
                    placeholder="Type your search here"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                ></input>
                <button className="App-Button">Search</button>
            </form>

            <div className="search-result">
                {typeof searchResults === "string"
                    ? searchResults
                    : searchResults.map((item) => {
                          return (
                              <AppImage
                                  url={item.images.fixed_width.url}
                                  title={item.title}
                                  key={item.id}
                              ></AppImage>
                          );
                      })}
            </div>
        </>
    );
}

export default Search;
