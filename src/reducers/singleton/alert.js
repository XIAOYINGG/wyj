import * as actions from '../../actions/singleton/definations'

const defaultState = {
    show: false,
    title: '',
    btnText: ''
};

const alert = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SHOW_ALERT:
            return Object.assign({}, state, {
                show: true,
                title: action.payload.title,
                btnText: action.payload.btnText
            });
        case actions.HIDE_ALERT:
            return Object.assign({}, state, {
                show: false,
                title: '',
                btnText: ''
            });
        default:
            return state;
    }
};

export default alert;