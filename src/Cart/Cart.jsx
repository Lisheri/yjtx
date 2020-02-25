import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartStarted, resetCartState } from '../store/actions/cartAction';
import Spinner from '../components/Spinner/Spinner.jsx';
import Head from './Head/Head';
import Main from './Main/Main';
import Suggestions from './Suggestions/Suggestions';
import './Cart.scss';
export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        //先读userId
        setTimeout(() => {

            this.props.fetchList(this.props.uid);
        }, 1000);
        //fetch server data action and subscribe redux store;
    }
    componentWillUnmount() {
        //reset the loading and error state
        resetCartState();
    }
    render() {
        //成功
        const resultBlock = this.props.succeed && this.props.list;
        const listBlock = this.props.loading ? <Spinner fullScreen></Spinner> : resultBlock;
        return (
            <div className="cart-container">
                {/* <p>welcome 用户{ this.props.uid }</p> */ }
                {/* { listBlock } */ }
                <Head></Head>
                <Main></Main>

                <Suggestions></Suggestions>
            </div>
        );
    }
}
const mps = ({ cart, user }) => ({
    uid: user.id,
    list: cart.list,
    succeed: cart.cartSucceed,
    loading: cart.cartLoading
})
const mdp = (dispatch) => ({
    fetchList: (id) => dispatch(fetchCartStarted(id)),
    resetState: () => dispatch(resetCartState())
})
export default connect(mps, mdp)(Cart);
