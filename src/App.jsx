import React from 'react';
import List from './List/List'
import Details from './Details/Details';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
//TODO: 懒加载,错误图片补全. 错误情况提示, 所有icon加上.
function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-area">
          <Switch>
            <Route path="/" exact component={ List } />
            <Route path="/details/:id" component={ Details } />
            <Route path="/list/:brand" component={ List } />
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
