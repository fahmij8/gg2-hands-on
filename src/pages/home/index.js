import HomeButton from "./HomeButton";
import HomeInput from "./HomeInput";
import HomeImage from "./HomeImage";

const Index = () => {
    return (
        <>
            <form>
                <HomeInput></HomeInput>
                <HomeButton></HomeButton>
            </form>
            <div className="App-Image">
                <HomeImage></HomeImage>
            </div>
        </>
    );
};

export default Index;
