import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import Search from ".";

describe("Search Component Testing", () => {
    it("Should render the search page", () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        );
        expect(screen.getByText("Lets search something!")).toBeInTheDocument();
    });
});
