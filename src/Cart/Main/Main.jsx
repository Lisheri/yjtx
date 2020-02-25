import React, { Component } from 'react';
import Item from './Item';
export class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="list-header">
                </div>
                <Item item={ { name: 'yin', brand: 'niga' } }></Item>
                <Item item={ { name: 'yin', brand: 'niga' } }></Item>
                <Item item={ { name: 'yin', brand: 'niga' } }></Item>

            </div >
        );
    }
}

export default Main;
