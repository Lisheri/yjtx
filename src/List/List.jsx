import React, { Component } from 'react';
import TopNav from '../SideNav/SideNav';
import './List.scss';
import Item from './Item/Item';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import ContactModal from '../components/ContactModal/ContactModal';
// import Pagination from './Pagination/Pagination';
import { oppo } from '../data/oppo';
export class List extends Component {
    // constructor() {
    //     super();
    //     // this.onClickCheckDetailHandler = this.onClic````kCheckDetailHandler.bind(this);
    // }

    render() {
        const brandName = this.props.match.params.brand;

        let list;
        switch (brandName) {
            case 'oppo':
                list = oppo;
                break;
            case '华为':
                list = []; break;
            case 'vivo': list = []; break;
            case '配件专区': list = []; break;
            default:
                //所有产品
                list = [];
                break;
        }
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
                    {/* <Pagination></Pagination> */ }
                </div>
            </div>
        );
    }
}

export default List;
