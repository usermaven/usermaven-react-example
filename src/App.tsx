import React from "react";
import { usePageView, useUsermaven } from "./useUsermaven";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let usermavenOpts = {
  key: "UMHixXCh1k",
  tracking_host: "https://events.usermaven.com",
};

function App() {
  const { usermaven } = useUsermaven(usermavenOpts);
  usePageView(usermaven);
  return (
    <>
      <h1>Usermaven &amp; React Demo</h1>
      <Switch>
        <Route path="/" exact>
          <p>
            Main page. Go to <Link to="/page">/page</Link>
          </p>
        </Route>
        <Route path="/page" exact>
          <p>
            /page: Go to <Link to="/">home page</Link>
          </p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
