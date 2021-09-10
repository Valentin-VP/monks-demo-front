import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          {/*Esta afuera porque tiene su propio layout*/}
          <Layout>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="no-match" component={NoMatch} />
          </Layout>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
