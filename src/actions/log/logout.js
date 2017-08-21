import fetch from 'isomorphic-fetch'

import * as actions from './definations'

const logout = (url) => {
    return {
        types: [
            actions.LOGOUT_REQUEST,
            actions.LOGOUT_SUCCESS,
            actions.LOGOUT_FAILURE
        ],
        fetchFunc: () => {
            return fetch(
                url,
                { credentials: 'same-origin' }
            );
        }
    }
};

export default logout