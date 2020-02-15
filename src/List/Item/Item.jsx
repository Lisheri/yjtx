import React from 'react';
import './Item.scss';
import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    const linkAdd = `/details/${item.id}`;
    return (
        <div className="card item">
            <Link to={ linkAdd }>
                <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581769801769&di=dcd22b2672273432684de5ae0ab9a38d&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170509%2F1074b66a1b8a4740811bfc02cf47351e_th.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{ item.name }</h5>
                <p className="card-text"><strong>$</strong>     { item.price }</p>
                <Link to={ linkAdd } className="btn btn-primary">查看详情</Link>
                <Link to={ linkAdd } className="btn btn-success buy-link">联系购买</Link>
            </div>
        </div>
    );
}

export default Item;
