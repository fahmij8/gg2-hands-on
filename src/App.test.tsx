import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./App";

describe("App Component Testing", () => {
    it("Should render the link to different pages", () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Trending")).toBeInTheDocument();
    });

    it("Should render the search page by default", () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByText("Lets search something!")).toBeInTheDocument();
    });

    it("Should render the trending page when the link is clicked", () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByText("Trending")).toBeInTheDocument();
        screen.getByText("Trending").click();
    });
});
