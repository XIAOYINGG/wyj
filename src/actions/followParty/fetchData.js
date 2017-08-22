/**
 * Created by KING on 2017/8/22.
 */
import fetch from 'isomorphic-fetch'
import  * as actions from './definations'

const fetchData=(url)=>{
    return{
        types:[
            actions.FETCH_DATA_REQUEST,
            actions.FETCH_DATA_SUCCESS,
            actions.FETCH_DATA_FAILURE
        ],
        fetchFunc: ()=>{
            return fetch(
                url,
                { credentials: 'same-origin' }
            );
        },
        shouldFetch: state => {
            return Date.now() - state.followParty.receivedAt > 10000;
        },
        payload: {}
    }
};
export default fetchData;
