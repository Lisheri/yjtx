import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartStarted, resetCartState } from '../store/actions/cartAction';
import Spinner from '../components/Spinner/Spinner.jsx';
import Head from './Head/Head';
import Main from './Main/Main';
import Suggestions from './Suggestions/Suggestions';
import './Cart.scss';
import { huawei } from '../data/oppo';
import ContactModal from '../components/ContactModal/ContactModal.jsx';
export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: null,
        }
    }
    componentDidMount() {
        //先读userId
        this.props.fetchList(this.props.uid);
        //fetch server data action and subscribe redux store;
    }
    componentWillUnmount() {
        //reset the loading and error state
        resetCartState();
    }
    render() {
        //成功
        const list = this.props.succeed && this.props.list;

        const ListBLock = this.props.loading ? <Spinner fullScreen></Spinner> : (this.props.succeed && <Main totalPrice={ list.reduce((acc, ele) => (acc + Number(ele.price)), 0) } list={ list }></Main>);
        return (
            <div className="cart-container">
                {/* <p>welcome 用户{ this.props.uid }</p> */ }
                {/*结账modal */ }

                <ContactModal></ContactModal>
                {/* 购物车标题*/ }
                <Head />
                {/* 购物车主题,包括结账按钮,总价以及购物车列表 */ }
                { ListBLock }
                {/*精品推荐 */ }
                <Suggestions suggestionList={ huawei }></Suggestions>
            </div >
        );
    }
}
const mps = ({ cart, user }) => ({
    uid: user.id,
    list: cart.list,
    succeed: cart.cartSucceed,
    loading: cart.cartLoading,
    cart
})
const mdp = (dispatch) => ({
    fetchList: (id) => dispatch(fetchCartStarted(id)),
    // fetchSuggestionList:(
    resetState: () => dispatch(resetCartState())
})
export default connect(mps, mdp)(Cart);
