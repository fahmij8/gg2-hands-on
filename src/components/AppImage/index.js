const AppImage = ({ url, title }) => {
    return (
        <div className="App-Image">
            <img src={url} alt={title} />
        </div>
    );
};

export default AppImage;
