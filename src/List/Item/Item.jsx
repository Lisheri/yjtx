import React from 'react';
import './Item.scss';
import { Link } from 'react-router-dom';
import eyeLogo from '../../assets/icons/眼睛.svg';
import buyLogo from '../../assets/icons/购买.svg';
import wechatLogo from '../../assets/icons/图片失败.svg';
const Item = ({ item }) => {
    const linkAdd = `/details/${item.id}`;
    return (
        <div className="card item">
            <Link to={ linkAdd }>
                <img
                    onError={ (e) => {
                        e.target.setAttribute('src', wechatLogo);
                    } }
                    src={ item.img } className="card-img-top" alt="..." />

            </Link>
            <div className="card-body">
                <h5 className="card-title">{ item.name }</h5>
                <p className="card-text"><strong>￥</strong>{ item.price }</p>
                <Link to={ linkAdd } className="btn btn-primary">
                    <img src={ eyeLogo } alt="" />
                    查看详情</Link>

                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">

                    <img src={ buyLogo } alt="" />
                    联系购买
                    </button>
            </div>
        </div>
    );
}

export default Item;
