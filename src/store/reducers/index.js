import cart from './cartReducer';
import auth from './auth';
import {
    combineReducers
} from 'redux';
const rootReducer = combineReducers({
    user: auth,
    cart,
});
export default rootReducer;