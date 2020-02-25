import * as actions from '../actions/cartAction';
export default (state = {}, action) => {

    const actionHandlers = {
        [actions.RESET_CART]() {
            return {}
        },
        [actions.FETCH_CART_STARTED](state) {
            return {
                ...state,
                cartLoading: true,
            }
        },
        [actions.FETCH_CART_SUCCEED](state) {
            return {
                ...state,
                list: action.payload,
                cartLoading: false,
                cartSucceed: true,
            }
        },
        [actions.FETCH_CART_FAILED](state) {
            return {
                ...state,
                cartLoading: false,
                cartSucceed: false,
            }
        }
    }

    if (action.type in actionHandlers) {
        return actionHandlers[action.type](state);
    } else return {
        ...state
    };

}