import fetch from 'isomorphic-fetch'

import * as actions from './definations'


const fetchData = (url) => {
    return {
        types: [
            actions.FETCH_DATA_REQUEST,
            actions.FETCH_DATA_SUCCESS,
            actions.FETCH_DATA_FAILURE
        ],
        fetchFunc: () => {
            return fetch(
                url,
                { credentials: 'same-origin' }
            );
        },
        shouldFetch: state => {
            return Date.now() - state.listenParty.liveList_listen.receivedAt > 10000;
        },
        payload: {}
    }
};

const saveLiveData = (title)=>{
    return{
        type:actions.SAVE_LIVE_TITLE,
        title:title
    }
};

export { fetchData, saveLiveData}