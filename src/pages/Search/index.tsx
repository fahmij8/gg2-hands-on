import AppImage from "components/AppImage";
import SearchBar from "components/SearchBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchSlice, GiphySearchResult, GiphyData } from "types";

function Search(): JSX.Element {
    const searchQuery = useSelector(
        (state: SearchSlice) => state.searchQuery.value
    );
    const [searchResults, setSearchResults] = useState<string | GiphyData[]>(
        "Lets search something!"
    );

    useEffect((): void => {
        if (searchQuery) {
            searchGIF();
        } else {
            setSearchResults("Lets search something!");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        searchGIF();
    };

    const searchGIF = () => {
        setSearchResults("Searching...");
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=` +
                `${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchQuery}&limit=12`
        )
            .then((response): Promise<GiphySearchResult> => response.json())
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
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {typeof searchResults === "string" ? (
                            <Grid item xs={12}>
                                <h5>{searchResults}</h5>
                            </Grid>
                        ) : (
                            searchResults.map((item) => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        key={item.id}
                                    >
                                        <AppImage
                                            url={item.images.fixed_width.url}
                                            title={item.title}
                                        ></AppImage>
                                    </Grid>
                                );
                            })
                        )}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default Search;
