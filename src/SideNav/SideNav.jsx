import React from 'react';

const SideNav = () => {
    return (
        <div className="side-nav">
            <ul className="nav nav-tabs">
                <li className="active" role="presentation"><a href="">oppo</a></li>
                <li role="presentation"><a href="#">vivo</a></li>
                <li role="presentation"><a href="#">华为</a></li>
                <li role="presentation"><a href="#">苹果</a></li>
                <li role="presentation"><a href="#">荣耀</a></li>
                <li role="presentation"><a href="#">配件专区</a></li>
            </ul>
        </div>
    );
}

export default SideNav;
