import React, { Component } from 'react';
import Item from './Item';
import './Item.scss'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count: 1
        };
        // this.handleItemClicked = this.handleItemClicked.bind(this);
        this.that = this;
    }
    handleItemClicked() {

    }

    handleIncrease() {
        this.state.count++
    }
    render() {
        const displayList = this.props.list.map(ele => (
            <Item key={ ele.id } item={ ele } that={this.that}></Item>
        ))
        return (
            <div className="main">
                <div className="list-header">
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <span>全选</span>
                    </div>
                    <a href="javascript: void(0)" className="deleteChoose">删除选中的商品</a>
                    <span className="chosed">已经选择<i className="inSpan">3</i>件商品</span>
                    <span className="totalPrice">总价格: <i className="inSpan">￥{ this.props.totalPrice }</i></span>
                    <button className="btn btn-primary">结账</button>
                </div>
                { displayList }
            </div >
        );
    }
}

export default Main;
