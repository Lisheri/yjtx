import React, { Component } from 'react';
import Item from './Item';

export class Main extends Component {
    constructor(props) {
        super(props);
        // this.handleItemClicked = this.handleItemClicked.bind(this);
    }
    handleItemClicked() {

    }
    render() {
        const displayList = this.props.list.map(ele => (
            <Item key={ ele.id } item={ ele }></Item>
        ))
        return (
            <div className="main">
                <div className="list-header">
                    <span>总价格: { this.props.totalPrice }</span>
                    <button className="btn btn-primary">结账</button>
                </div>
                { displayList }



            </div >
        );
    }
}

export default Main;
