import React from 'react';
import './Item.scss';
import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    const linkAdd = `/details/${item.id}`;
    return (
        <div className="card item">
            <Link to={ linkAdd }>
                <img
                    src={ item.img } className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{ item.name }</h5>
                <p className="card-text"><strong>￥</strong>{ item.price }</p>
                <Link to={ linkAdd } className="btn btn-primary">查看详情</Link>

                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
                    联系购买
                    </button>
            </div>
        </div>
    );
}

export default Item;
