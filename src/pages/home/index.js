import AppButton from "components/AppButton";
import AppImage from "components/AppImage";
import AppInput from "components/AppInput";
import dataImage from "data";

const Index = () => {
    return (
        <>
            <form>
                <AppInput></AppInput>
                <AppButton></AppButton>
            </form>
            {dataImage
                .filter((item) => item.rating !== "g")
                .map((item) => {
                    return (
                        <AppImage
                            key={item.id}
                            url={item.url}
                            title={item.title}
                        />
                    );
                })}
        </>
    );
};

export default Index;
