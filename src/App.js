import React from 'react';
import './styles/App.sass';
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from "react-router-dom";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/" exact component={BurgerBuilder} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
