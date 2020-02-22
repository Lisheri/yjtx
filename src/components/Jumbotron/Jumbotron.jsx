import React from 'react';
import './Jumbotron.scss';

const Jumbotron = ({ title = '尹记通讯', lead = "12年老店,因为专业,所以选择." }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-primary">{ title }</h1>
                <p className="lead">{ lead }</p>
            </div>
        </div>
    );
}

export default Jumbotron;
