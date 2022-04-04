import AppImage from "components/AppImage";
import SearchBar from "components/SearchBar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Search() {
    const searchQuery = useSelector((state) => state.searchQuery.value);
    const [searchResults, setSearchResults] = useState(
        "Lets search something!"
    );

    useEffect(() => {
        if (searchQuery) {
            searchGIF();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    const handleSubmit = (event) => {
        event.preventDefault();
        searchGIF();
    };

    const searchGIF = () => {
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
                <SearchBar></SearchBar>
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
