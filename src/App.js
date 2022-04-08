import "./App.css";
import Search from "pages/Search";
import Trending from "pages/Trending";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="App-nav">
                    <Link to="/">Home</Link>
                    <Link to="/trending">Trending</Link>
                </div>
                <Switch>
                    <Route path="/trending">
                        <Trending />
                    </Route>
                    <Route path="/">
                        <Search />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
