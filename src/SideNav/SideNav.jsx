import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="side-nav">
            <ul className="nav ">
                <Link to='/list/all' className="nav-link">全部手机</Link>
                <Link to="/list/oppo" className="nav-link " >oppo</Link>
                <Link to="/list/vivo" className="nav-link" >vivo</Link>
                <Link to="/list/华为" className="nav-link" >华为</Link>
                <Link to="/list/配件专区" className="nav-link" >配件专区</Link>
            </ul>
        </div>
    );
}

export default SideNav;
