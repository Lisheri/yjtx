import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import './Details.scss';
import { Link } from 'react-router-dom';
import Left from './Left/Left';
import ContactModal from '../components/ContactModal/ContactModal';
import serverData from '../data/oppo';
export class Details extends Component {
    render() {

        const id = this.props.match.params.id;
        const item = serverData.find(ele => ele.id == id);
        return (
            <div className='item-details-container full-height'>
                <Jumbotron title={ 'asdas' }></Jumbotron>
                <ContactModal></ContactModal>


                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">vivo手机</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">findX</li>
                    </ol>
                </nav>
                <div className="main-area container">
                    <div className="row full-height">
                        <Left img={ item.img }  ></Left>
                        <div className="col-md-4 right">
                            <h4>{ item.name }</h4>
                            <h3 >￥{ item.price }</h3>
                            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
                                联系我们,购买
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
