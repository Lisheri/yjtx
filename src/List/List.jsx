import React, { Component } from 'react';
import TopNav from '../SideNav/SideNav';
// import './List.scss';
export class List extends Component {
    render() {
        return (
            <div className="list-container">
                <TopNav></TopNav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">1</div>
                        <div className="col-md-3">2</div>
                        <div className="col-md-3">3</div>
                        <div className="col-md-3">4</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
