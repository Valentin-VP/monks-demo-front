import { React, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";
import { About } from "./About";
import { Contact } from "./Contact";
import { Grafico } from "./Grafico";
import { Cart } from "./Cart";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { toast } from "react-toastify";
import { CartProvider } from "react-use-cart";

toast.configure();
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Fragment>
            {/*uso este fragment para poder excluir cosas del header y footer */}
            <NavigationBar />
            <CartProvider>
              <Route exact path="/" component={Home} />{" "}
              <Route exact path="/cart" component={Cart} />
            </CartProvider>
            {/* el home tiene su propio layout*/}
            <Layout>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/grafica" component={Grafico} />
              <Route path="no-match" component={NoMatch} />
            </Layout>
            <Footer />
          </Fragment>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
