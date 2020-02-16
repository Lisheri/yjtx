import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="side-nav">
            <ul className="nav nav-tabs">
                <li className="active" role="presentation"><Link href="">oppo</Link></li>
                <li role="presentation"><Link href="#">vivo</Link></li>
                <li role="presentation"><Link href="#">华为</Link></li>
                <li role="presentation"><Link href="#">苹果</Link></li>
                <li role="presentation"><Link href="#">荣耀</Link></li>
                <li role="presentation"><Link href="#">配件专区</Link></li>
            </ul>
        </div>
    );
}

export default SideNav;
