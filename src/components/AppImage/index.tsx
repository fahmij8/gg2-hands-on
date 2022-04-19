const AppImage = ({
    url,
    title,
}: {
    url: string;
    title: string;
}): JSX.Element => {
    return (
        <>
            <div className="App-Image" data-testid="image-result">
                <img src={url} alt={title} />
            </div>
            <small>{title}</small>
        </>
    );
};

export default AppImage;
