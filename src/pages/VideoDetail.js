/**
 * Created by KING on 2017/8/27.
 */
import React,{Component} from 'react';
import { connect } from 'react-redux'
import { videoDetailDataUrl } from '../urls/index'
import { picPathHead } from "../conf/conf"
import StatefulMainTopBar from '../containers/StatefulMainTopBar'
import { showLoader, hideLoader } from '../actions/singleton/loader'
import fetchData from '../actions/videoDetail/fetchData'
import Comments from "./Comments";
import CommentInput from "./CommentInput";

class VideoDetail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.init();
    }
    async init(){
        const {videoId}=this.props.params;
        const { fetchData } = this.props;
        await fetchData(videoDetailDataUrl,videoId);
    }

    render(){
        const {videos,comments}=this.props;
       /* const backUrl = section == 15 ?"/learn-party":`/videos/${section}`;*/
        return(
            <div className="video-detail">
                <StatefulMainTopBar stateId="video-detail" loaderDelay title="学你课"/>
                <div className="video-info">
                    <div className="videoImage">
                        <img src={videos.img} alt="" className="videoLogo"/>
                        <img src={picPathHead+`/images/liveDetail/start${window.imgSuffix}.png`} alt="" className="playImg"/>
                    </div>
                    <div className="videoDes">
                        <div className="videoDes-title">
                            <p>{videos.title}</p>
                        </div>
                        <div className="time">
                            <img src={picPathHead+`/images/liveDetail/time${window.imgSuffix}.png`} alt=""/>
                            <span>{videos.time}</span>
                        </div>
                    </div>
                </div>
                <Comments comments={comments}/>
                <CommentInput/>
            </div>
        )
    }
}

VideoDetail=connect(
    state=>({
        videos:state.videoDetail.videos,
        comments:state.videoDetail.comments
    }),
    {
        fetchData,
        showLoader,
        hideLoader
    }
)(VideoDetail);

export default VideoDetail;
