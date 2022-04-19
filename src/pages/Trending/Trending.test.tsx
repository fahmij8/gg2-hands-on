import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import Trending from ".";

describe("Trending Component Testing", () => {
    it("Should render the trending page", () => {
        render(
            <Provider store={store}>
                <Trending />
            </Provider>
        );
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
});
