/**
 * Created by KING on 2017/8/29.
 */
import * as actions from '../../actions/videoList/definations'

const defaultState={
    isFetching: false,
    receivedAt: 0,
    videoList_7:{receivedAt: 0,videos:[]},
    videoList_8: {receivedAt: 0,videos:[]},
    videoList_9: {receivedAt: 0,videos:[]},
    videoList_10: {receivedAt: 0,videos:[]},
    videoList_11: {receivedAt: 0,videos:[]},
    videoList_12: {receivedAt: 0,videos:[]},
    videoList_13: {receivedAt: 0,videos:[]},
    videoList_14: {receivedAt: 0,videos:[]},
    videoList_15: {receivedAt: 0,videos:[]},
    videoListId:0
};

const videoList=(state=defaultState,action)=>{
    switch (action.types){
        case actions.FETCH_DATA_REQUEST:
            return Object.assign({},state,{
            isFetching:true, videoListId:action.videoListId
        });

        case actions.FETCH_DATA_SUCCESS:
            return Object.assign({},state,{
                ['videoList_'+state.videoListId]:{receivedAt:action.timestamp,videos:action.json.data.videos},
                isFetching:false,
                });
        case actions.FETCH_DATA_FAILURE:
            return Object.assign({},state,{
                isFetching:false
                });
        default:
            return state;
    }
};
export default videoList;
