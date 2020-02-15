import React from 'react';
import List from './List/List'
import Details from './Details/Details';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './App.scss';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-area">
          <Switch>
            <Route path="/" exact component={ List } />
            <Route path="/details/:id" component={ Details } />
            <Route path="/list" component={ List } />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
