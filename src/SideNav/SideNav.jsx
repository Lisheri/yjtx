import React from 'react';
import { Link } from 'react-router-dom';
import searchLogo from '../assets/icons/搜索.svg';
import './SideNav.scss';
const SideNav = ({ searchItems, currentLink = "all" }) => {

    return (
        <div className="side-nav ">
            <ul className="nav nav-pills">
                <Link to='/list/all' className={ currentLink === "all" ? "nav-link active" : "nav-link " }>全部手机</Link>
                <Link to="/list/apple" className={ currentLink === "apple" ? "nav-link active" : "nav-link " } >苹果</Link>
                <Link to="/list/oppo" className={ currentLink === "oppo" ? "nav-link active" : "nav-link " } >oppo</Link>
                <Link to="/list/vivo" className={ currentLink === "vivo" ? "nav-link active" : "nav-link " } >vivo</Link>
                <Link to="/list/huawei" className={ currentLink === "huawei" ? "nav-link active" : "nav-link " } >华为</Link>
                <Link to="/list/glory" className={ currentLink === "glory" ? "nav-link active" : "nav-link " } >荣耀</Link>
                <Link to="/list/plugin" className={ currentLink === "plugin" ? "nav-link active" : "nav-link " } >配件专区</Link>
                <Link to="/cart" className={ currentLink === "cart" ? "nav-link active" : "nav-link " } >购物车</Link>
                <Link to="/auth/login" className={ currentLink === "/auth/login" ? "nav-link active" : "nav-link " } >登录</Link>
                <Link to="/auth/register" className={ currentLink === "/auth/register" ? "nav-link active" : "nav-link " } >注册</Link>
                <div class="form-inline my-2 my-lg-0">
                    <img src={ searchLogo } alt="" />
                    <input id="search-input" class="form-control mr-sm-2" type="search" placeholder="输入商品名称" aria-label="Search" />
                    <button onClick={ searchItems } class="btn btn-outline-success my-2 my-sm-0" type="button">搜索商品</button>
                </div>
            </ul>
        </div>
    );
}

export default SideNav;
