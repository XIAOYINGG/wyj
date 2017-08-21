import * as actions from '../../actions/singleton/definations'

const defaultState = {
    show: false,
    ids: {}
};

const loader = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SHOW_LOADER:
            return Object.assign({}, state, {
                show: true,
                ids: { ...state.ids, [action.id]: true }
            });
        case actions.HIDE_LOADER:
            return Object.assign({}, state, {
                show: false,
                ids: { ...state.ids, [action.id]: false }
            });
        default:
            return state;
    }
};

export default loader;