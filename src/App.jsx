import React, { Suspense, } from 'react';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//懒加载
const List = React.lazy(() => import('./List/List.jsx'));
const Details = React.lazy(() => import('./Details/Details.jsx'));
//TODO: 图片尺寸条对错误情况提示(没有后端交互,后期加入),下滑懒加载
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <div className="main-area">
            <Suspense fallback={ <div>页面加载中...</div> }>
              <Switch>
                <Route path="/" exact component={ List } />
                <Route path="/details/:id" component={ Details } />
                <Route path="/list/:brand" component={ List } />
                <Redirect to="/"></Redirect>
              </Switch>
            </Suspense>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
