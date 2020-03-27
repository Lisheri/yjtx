import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({ item,that}) => {
    return (
        <div className='cart-item'>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            </div>
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
                </div>
                <span className="commodityPrice">￥{ item.price }</span>
            </div>
            <div className="checkout-panel">
                <div className="btn-group mr-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-secondary decrease" onClick={() => {
                        if (item.count <= 0) {
                            item.count = 0;
                        } else {
                            item.count--;
                        }
                        that.setState({
                            count: item.count
                        })
                    }}>-</button>
                    <input type="text" className="num-input" defaultValue={item.count} value={item.count}/>
                    <button type="button" className="btn btn-secondary increase" onClick={() => {item.count++;
                        that.setState({
                            count: item.count
                        })}}>+</button>
                </div>
                <span className="allPrice">￥{item.count * item.price}</span>
                <button className="btn btn-success" type="button">立即购买</button>
                <button className="btn btn-success btn-delete" type="button">删除</button>
            </div>
        </div>
    );
};

export default Item;
