import React from 'react';
import { Link } from 'react-router-dom';
import searchLogo from '../assets/icons/搜索.svg';
import './SideNav.scss';
const SideNav = ({ searchItems }) => {
    return (
        <div className="side-nav">
            <ul className="nav ">
                <Link to='/list/all' className="nav-link">全部手机</Link>
                <Link to="/list/apple" className="nav-link " >苹果</Link>
                <Link to="/list/oppo" className="nav-link " >oppo</Link>
                <Link to="/list/vivo" className="nav-link" >vivo</Link>
                <Link to="/list/华为" className="nav-link" >华为</Link>
                <Link to="/list/glory" className="nav-link" >荣耀</Link>
                <Link to="/list/配件专区" className="nav-link" >配件专区</Link>
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
