/**
 * Created by KING on 2017/8/29.
 */
import fetch from 'isomorphic-fetch'
import  * as actions from './definations'

const fetchData=(url,section)=>{
    const endUrl = url + section+".json";
    console.log("####",endUrl);
    return {
        types: [
            actions.FETCH_DATA_REQUEST,
            actions.FETCH_DATA_SUCCESS,
            actions.FETCH_DATA_FAILURE
        ],
        fetchFunc: () => {
            return fetch(
                endUrl,
                { credentials: 'same-origin' }
            );
        },
        shouldFetch: state => {
            return Date.now() - state.videoList['videoList_'+section].receivedAt > 10000;
        },
        payload: {
            videoListId:section
        }
    }
};
export  default  fetchData;
