import React, { Component } from 'react';
import TopNav from '../SideNav/SideNav';
import './List.scss';
import Item from './Item/Item';
import Pagination from './Pagination/Pagination';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import ContactModal from '../components/ContactModal/ContactModal';
const list = new Array(10).fill({ name: 'Placeholder', id: 996, price: 998 });
export class List extends Component {
    // constructor() {
    //     super();
    //     // this.onClickCheckDetailHandler = this.onClic````kCheckDetailHandler.bind(this);
    // }

    render() {
        const displayList = list.map((ele, index) => (
            <div
                key={ index } className="col-md-3 col-sm-4">
                <Item item={ ele }></Item>
            </div>
        ))
        return (
            <div className="list-container full-height">
                <Jumbotron></Jumbotron>
                <TopNav></TopNav>
                <ContactModal></ContactModal>
                <div className="container">
                    <div className="row">
                        { displayList }
                    </div>
                    <Pagination></Pagination>
                </div>
            </div>
        );
    }
}

export default List;
