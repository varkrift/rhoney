import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Catalog from './Components/Catalog'
import Cart from './Components/Cart'

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">

        <Header></Header>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
