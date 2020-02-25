import * as actions from '../actions/authAction';
export default (state = {
    id: '999'
}, action) => {

    const actionHandlers = {
        [actions.GET_AUTH_DATA]() {
            return {}
        },

    }

    if (action.type in actionHandlers) {
        return actionHandlers[action.type](state);
    } else return {
        ...state
    };

}