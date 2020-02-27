import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ item, }) => {
    return (
        <div className='cart-item'>
            <div className="cart-item__header">
                { item.brand }
            </div>
            <div className="cart-item__body">
                <div className="img">
                    <Link to={ `/details/${item.id}` }>
                        <img src={ item.img } alt="" />
                    </Link>
                </div>
                <div className="desc">
                    <Link to={ `/details/${item.id}` }>
                        { item.name }
                    </Link>
                    <div className="checkout-panel">
                        选择框(价格)
                        <button className="btn btn-success">立即购买</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Item;
