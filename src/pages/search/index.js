import { Component } from "react";
import AppImage from "components/AppImage";

class Index extends Component {
    state = {
        searchQuery: "",
        searchResults: "Lets search something!",
    };

    handleSearch = (event) => {
        event.preventDefault();
        this.setState({ searchResults: "Searching..." });
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${this.state.searchQuery}&limit=12`
        )
            .then((response) => response.json())
            .then((lists) => {
                if (lists.data.length === 0) {
                    this.setState({ searchResults: "No results found!" });
                } else {
                    this.setState({ searchResults: lists.data });
                }
            })
            .catch((error) => {
                console.error(error);
                this.setState({ searchResults: "Error happened!" });
            });
    };

    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleSearch(event)}>
                    <input
                        type="text"
                        className="App-Input"
                        placeholder="Type your search here"
                        value={this.state.searchQuery}
                        onChange={(event) =>
                            this.setState({ searchQuery: event.target.value })
                        }
                    ></input>
                    <button className="App-Button">Search</button>
                </form>

                <div id="search-status">
                    {typeof this.state.searchResults === "string"
                        ? this.state.searchResults
                        : this.state.searchResults.map((item) => {
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
}

export default Index;
