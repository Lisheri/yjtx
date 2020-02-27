import React from 'react';
import Item from '../../List/Item/Item.jsx';

const Suggestions = ({ suggestionList }) => {
    const displayList = suggestionList.map(ele => (
        <div className="col-6">
            <Item item={ ele } key={ ele.id }></Item>
        </div>
    ))
    return (
        <div className="cart-suggestions border-primary">
            <div className="cart-suggestions__header">
                <h4>
                    精品推荐
                    </h4>
            </div>
            <div className="row">
                { displayList }
            </div>
        </div>
    );
}

export default Suggestions;
