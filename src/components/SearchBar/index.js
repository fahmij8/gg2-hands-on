import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../search-slice";
import { useState, useEffect } from "react";

function SearchBar() {
    const [inputQuery, setInputQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const debouncedQuery = setTimeout(() => {
            dispatch(setSearchQuery(inputQuery));
        }, 500);
        return () => clearTimeout(debouncedQuery);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputQuery]);

    return (
        <>
            <input
                type="text"
                className="App-Input"
                placeholder="Type your search here"
                value={inputQuery}
                onChange={(event) => setInputQuery(event.target.value)}
            ></input>
            <button className="App-Button">Search</button>
        </>
    );
}

export default SearchBar;
