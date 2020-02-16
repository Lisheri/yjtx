import React from 'react';
import List from './List/List'
import Details from './Details/Details';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
//TODO: 搜索功能. 导入全部数据. 分页(解决载入错误). 美化界面.
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
