import React, { Component } from 'react';
import TopNav from '../SideNav/SideNav';
import './List.scss';
import Item from './Item/Item';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import ContactModal from '../components/ContactModal/ContactModal';
// import Pagination from './Pagination/Pagination';
import { oppo, apple, huawei, glory, allPhones, vivo, plugins } from '../data/oppo';
export class List extends Component {
    constructor() {
        super();
        // this.onClickCheckDetailHandler = this.onCliCheckDetailHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.setCurrentList = this.setCurrentList.bind(this);
        this.state = {
            currentList: [],
            filter: '',
        }
    }

    componentDidMount() {
        this.setCurrentList();
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps, this.props);
        //品牌改变
        if (prevProps.match.params.brand !== this.props.match.params.brand) {
            this.setCurrentList();
        }
    }

    setCurrentList() {
        const brandName = this.props.match.params.brand;
        let list;
        switch (brandName) {
            case 'apple':
                list = apple; break;
            case 'oppo':
                list = oppo;
                break;
            case '华为':
                list = huawei;
                break;
            case 'glory':
                list = glory;
                break;
            case 'vivo': list = vivo; break;
            case '配件专区': list = plugins; break;
            default:
                //所有产品
                list = allPhones;
                break;
        }
        document.getElementById('search-input').value = '';
        this.setState({
            currentList: list,
            filter: '',
        })
    }
    onSearchHandler(e) {
        e.preventDefault();
        const searchInput = document.getElementById('search-input').value;
        //搜索关键字变化
        if (searchInput !== this.state.filter) {
            // allPhones

            this.setState({ filter: searchInput });
        }
    }
    render() {

        //搜索逻辑 有待提高
        const displayList = this.state.currentList.filter(ele => ele.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1).map((ele, index) => (
            <div
                key={ index } className="col-sm-4 col-md-3 col-6">
                <Item item={ ele }></Item>
            </div>
        ))
        return (
            <div className="list-container full-height">
                <Jumbotron></Jumbotron>
                <TopNav
                    currentLink={ this.props.match.params.brand || "all" }
                    searchItems={ this.onSearchHandler }></TopNav>
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
