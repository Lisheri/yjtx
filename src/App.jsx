import React, { Suspense, } from 'react';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Spinner from './components/Spinner/Spinner';

//懒加载
const List = React.lazy(() => import('./List/List.jsx'));
const Cart = React.lazy(() => import('./Cart/Cart.jsx'));
const Details = React.lazy(() => import('./Details/Details.jsx'));
const Login = React.lazy(() => import('./auth/Login.jsx'));
const Register = React.lazy(() => import('./auth/Register.jsx'));
//TODO: 图片尺寸条对错误情况提示(没有后端交互,后期加入),下滑懒加载,价格区间,列表加入display(各个品牌标志banner)
//TODO: 还是有滚动条
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <div className="main-area">
            <Suspense fallback={
              <Spinner fullScreen></Spinner>
            }>
              <Switch>
                <Route path="/" exact component={ List } />
                <Route path="/details/:id" component={ Details } />
                <Route path="/list/:brand" component={ List } />
                <Route path="/cart" component={ Cart } />
                <Route path="/auth/login" component={ Login } />
                <Route path="/auth/register" component={ Register } />

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
