/**
 * Created by KING on 2017/8/24.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import StatefulMainTopBar from '../containers/StatefulMainTopBar'
import { picPathHead } from "../conf/conf"
import { liveDetailDataUrl } from '../urls/index'
import { showLoader, hideLoader } from '../actions/singleton/loader'
import fetchData from '../actions/liveDetail/fetchData'
import Comments from "./Comments"

class LiveDetail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.init();
    }
    async init(){
        const {liveId}=this.props.params;
        const {isOver}=this.props.location.query;
        const { fetchData } = this.props;
        await fetchData(liveDetailDataUrl,liveId,isOver);
    }

    render(){
        const {details}=this.props;
        return(
            <div className="live-detail">
                <StatefulMainTopBar stateId="live-detail" loaderDelay title="听你讲"/>
                <div className="">
                    <div className="liveImage">
                        <img src={} alt="" className="liveLogo"/>
                        <img src={picPathHead+`/images/listenParty/start${window.imgSuffix}.png`} alt="" className="playImg"/>
                    </div>
                    <div className="liveDes">
                        <p>{}</p>
                            <div className="time">
                                <img src={picPathHead+`/images/listenParty/time${window.imgSuffix}.png`} alt=""/>
                                <span>{}</span>
                            </div>
                            <div className="speaker">
                                <img src=""/>
                                <p className="">{}</p>
                                <p className="">{}</p>
                            </div>
                    </div>
                </div>
                <Comments details = {details}/>
            </div>
        )
    }
}
LiveDetail = connect(
    state => ({
        details:state.liveDetail.details
    }),
    {
        fetchData,
        showLoader,
        hideLoader
    }
)(LiveDetail);

export default LiveDetail;