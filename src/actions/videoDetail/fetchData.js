/**
 * Created by KING on 2017/8/27.
 */
import fetch from 'isomorphic-fetch'
import  * as actions from './definations'

const fetchData=(url,videoId)=>{
    return{
        types:[
            actions.FETCH_DATA_REQUEST,
            actions.FETCH_DATA_SUCCESS,
            actions.FETCH_DATA_FAILURE
        ],
        fetchFunc:()=>{
            return fetch(
                url+videoId+".json",
                {credentials:'same-origin'}
            );
        },
        shouldFetch: state => {
            return Date.now() - state.videoDetail.receivedAt > 0;
        },
        payload: {}
    }
};
export default fetchData;