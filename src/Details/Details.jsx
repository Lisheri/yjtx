import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import './Details.scss';
import { Link } from 'react-router-dom';
import Left from './Left/Left';
export class Details extends Component {
    render() {
        return (
            <div className='item-details-container full-height'>
                <Jumbotron title={ 'asdas' }></Jumbotron>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">vivo手机</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">findX</li>
                    </ol>
                </nav>
                <div className="main-area container">
                    <div className="row full-height">
                        <Left></Left>
                        <div className="col-md-4 right">
                            <h1 >Find X</h1>
                            <h3>简介........</h3>
                            <button className='btn btn-primary'>联系商家,购买</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
