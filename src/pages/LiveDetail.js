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
import CommentInput from "./CommentInput"
import './liveDetail.scss'

class LiveDetail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.init();
    }
    async init(){
        const {liveId}=this.props.params;
        const { fetchData } = this.props;
        await fetchData(liveDetailDataUrl,liveId);

    }

    render(){
        const {details,comments}=this.props;

        return(
            <div className="live-detail">
                <StatefulMainTopBar stateId="live-detail" loaderDelay title="听你讲"/>
                <div className="live-info">
                    <div className="liveImage">
                        <img src={details.img} alt="" className="liveLogo"/>
                        <img src={picPathHead+`/images/liveDetail/start${window.imgSuffix}.png`} alt="" className="playImg"/>
                    </div>
                    <div className="liveDes">
                        <div className="liveDes-title">
                            <p>{details.title}</p>
                        </div>
                        <div className="time">
                                <img src={picPathHead+`/images/liveDetail/time${window.imgSuffix}.png`} alt=""/>
                                <span>{details.time}</span>
                        </div>
                        <div className="speaker">
                                <img src={details.picture} alt=""/>
                            <div className="txt">
                                <p className="speaker-name">{details.speaker}</p>
                                <p className="speaker-info">{details.speakerInfo}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Comments comments = {comments}/>
                <CommentInput/>

            </div>
        )
    }
}
LiveDetail = connect(
    state => ({
        details:state.liveDetail.details,
        comments:state.liveDetail.comments
    }),
    {
        fetchData,
        showLoader,
        hideLoader
    }
)(LiveDetail);

export default LiveDetail;