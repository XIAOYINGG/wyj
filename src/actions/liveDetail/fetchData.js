/**
 * Created by KING on 2017/8/24.
 */
import fetch from 'isomorphic-fetch'

import * as actions from './definations'

const fetchData = (url,liveId) => {
    return {
        types: [
            actions.FETCH_DATA_REQUEST,
            actions.FETCH_DATA_SUCCESS,
            actions.FETCH_DATA_FAILURE
        ],
        fetchFunc: () => {
            return fetch(
                url+liveId+".json",
                { credentials: 'same-origin' }
            );
        },
        shouldFetch: state => {
            return Date.now() - state.liveDetail.receivedAt > 1000;
        },
        payload: {}
    }
};
export default fetchData;