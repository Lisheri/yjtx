import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import './Details.scss';
import { Link } from 'react-router-dom';
import Left from './Left/Left';
import ContactModal from '../components/ContactModal/ContactModal';
import serverData from '../data/oppo';
import cartLogo from '../assets/icons/购买.svg'
export class Details extends Component {
    render() {
        const id = this.props.match.params.id;
        const item = serverData.find(ele => ele.id == id);
        let displayBrand;
        switch (item.brand) {
            case 'vivo':
                displayBrand = 'Vivo'
                break;
            case 'oppo':
                displayBrand = 'Oppo'
                break;
            case 'huawei':
                displayBrand = '华为'
                break;
            case 'glory':
                displayBrand = '荣耀'
                break;
            case 'apple':
                displayBrand = '苹果'
                break;
            default:
                displayBrand = '配件专区'
                break;
        }

        return (
            <div className='item-details-container full-height'>
                <Jumbotron ></Jumbotron>
                <ContactModal></ContactModal>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to={ `/list/${item.brand}` }>{ displayBrand }</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{ item.name }</li>
                    </ol>
                </nav>
                <div className="main-area container">
                    <div className="row full-height">
                        <Left img={ item.img } name={ item.name }  ></Left>
                        <div className="col-md-4 right">
                            <h4>{ item.name }</h4>
                            <h3 >￥{ item.price }</h3>
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
                                <img src={ cartLogo } alt="" />
                                联系购买
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
