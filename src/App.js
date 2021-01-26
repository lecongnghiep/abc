import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screen/Home.js";
import New from "./screen/New.js";
import Doing from "./screen/Doing.js";
import "./css/styles.css";
import "./css/Css.css";
import TodoStore from "./stores/TodoStore";

export default function App() {
  return (
    <Router>
      <div id="bodyRouter">
        <div className="header">
          <h3>TO DO LIST</h3>
        </div>
        <div>
          <nav>
            <ul className="list">
              <li className="li-1">
                <Link to="/Home">Home</Link>
              </li>
              <li className="li-2">
                <Link to="/New">New</Link>
              </li>
              <li className="li-3">
                <Link to="/Doing">Doing</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Doing">
              <Doing />
            </Route>
            <Route path="/New">
              <New />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
