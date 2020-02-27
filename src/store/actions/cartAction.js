import {
    apple,
} from '../../data/oppo';
export const FETCH_CART_STARTED = 'FETCH_CART_STARTED';
export const FETCH_CART_SUCCEED = 'FETCH_CART_SUCCEED';
export const FETCH_CART_FAILED = 'FETCH_CART_FAILED';
export const RESET_CART = 'RESET_CART';

export function fetchCartStarted(userId) {
    return dispatch => {
        dispatch({
            type: FETCH_CART_STARTED
        });
        setTimeout(() => {
            dispatch({
                type: FETCH_CART_SUCCEED,
                payload: apple
            })
        }, 2000)
    }

}

export function resetCartState() {
    return {
        type: RESET_CART
    }
}