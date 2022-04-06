import AppImage from "components/AppImage";
import { useEffect, useState } from "react";

function Trending() {
    const [trendingImage, setTrendingImage] = useState("Loading...");
    const [trendingOffset, setTrendingOffset] = useState(0);

    useEffect(() => {
        trendingImage === "Loading..." &&
            trendingOffset !== 0 &&
            setTrendingOffset(0);
        fetch(
            `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=12&offset=${trendingOffset}`
        )
            .then((response) => response.json())
            .then((lists) => {
                if (lists.data.length === 0) {
                    setTrendingImage("No results found");
                } else {
                    setTrendingImage(lists.data);
                }
            })
            .catch((error) => {
                console.error(error);
                setTrendingImage("Error Happened!");
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trendingOffset]);

    const handleOffset = (number) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTrendingOffset(trendingOffset + number);
    };

    return (
        <>
            {typeof trendingImage === "string"
                ? trendingImage
                : trendingImage.map((item) => {
                      return (
                          <AppImage
                              url={item.images.fixed_width.url}
                              title={item.title}
                              key={item.id}
                          ></AppImage>
                      );
                  })}
            <div style={{ margin: "20px 0" }}>
                {trendingOffset > 0 && (
                    <button
                        className="App-Button"
                        onClick={() => handleOffset(-12)}
                        style={{ marginRight: "10px" }}
                    >
                        Previous
                    </button>
                )}
                <button className="App-Button" onClick={() => handleOffset(12)}>
                    Next
                </button>
            </div>
        </>
    );
}

export default Trending;
