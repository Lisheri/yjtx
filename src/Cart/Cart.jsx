import React, { Component } from 'react';

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        //fetch server data action and subscribe redux store;
    }

    render() {

        return (
            <div>
                cartList
            </div>
        );
    }
}

export default Cart;
