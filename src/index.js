import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./styles.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const MessagePage = lazy(() => import("./pages/MessagePage"));

function App() {
  return (
    <Router>
      <Suspense fallback={() => <p>Loading...</p>}>
        <Switch>
          <Route path="/message">
            <MessagePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
