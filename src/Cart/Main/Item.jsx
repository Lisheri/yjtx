import React from 'react';
import Wechart from '../../assets/icons/微信.svg'
const Item = ({ item }) => {
    return (
        <div className='cart-item'>
            <div className="cart-item__header">
                { item.brand }
            </div>
            <div className="cart-item__body">
                <div className="img">
                    <img src={ Wechart } alt="" />
                </div>
                <div className="desc">
                    { item.name }
                </div>
            </div>
        </div>
    );
}

export default Item;
