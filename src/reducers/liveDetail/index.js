/**
 * Created by KING on 2017/8/24.
 */
import * as actions from '../../actions/liveDetail/definations'

const defaultState={

    isFetching: false,
    receivedAt: 0,
    details:{},
    comments:[]
};
const liveDetail=(state = defaultState, action)=>{
    switch (action.type) {
        case actions.FETCH_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actions.FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                ...action.json.data,
                isFetching: false,
                receivedAt: action.timestamp
            });
        case actions.FETCH_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
};
export default liveDetail;