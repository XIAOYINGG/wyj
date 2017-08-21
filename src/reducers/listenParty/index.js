import * as actions from '../../actions/listenParty/definations'

const defaultState = {
    liveList_listen: {receivedAt: 0,liveList:[],isFetching: false},
    liveTitle:""
};

const listenParty = (state = defaultState, action)=>{
    switch (action.type) {
        case actions.FETCH_DATA_REQUEST:
            return Object.assign({},state,{
                liveList_listen: Object.assign({},state.liveList_listen,{isFetching:true})
            });
        case actions.FETCH_DATA_SUCCESS:
            return Object.assign({},state,{
               liveList_listen:{ liveList:action.json.data.liveList,
                   isFetching:false,
                   receivedAt: action.timestamp}
            });
        case actions.FETCH_DATA_FAILURE:
            return Object.assign({},state,{
                liveList_listen: Object.assign({},state.liveList_listen,{isFetching:false})
            });


        case actions.SAVE_LIVE_TITLE:
            return Object.assign({},state,{liveTitle:action.title});
        default:
            return state;
    }
};

export default listenParty;