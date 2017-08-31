/**
 * Created by KING on 2017/8/29.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,hashHistory } from "react-router"
import { videoListDataUrl } from '../urls/index'
import fetchData from '../actions/videoList/fetchData'
import SimpleTopBar from '../components/SimpleTopBar'
import Studies from "./Studies";

class VideoList extends Component{
    constructor(props){
        super(props);
        this.num = {
            7: '党建理论', 8: '党政快评', 9: '红色气质',
            10: '我们是党员',11:'舆情动态',12:'习大大词条',13:'百年记忆',14:'质朴人生',15:"引经用典"
        };
    }

    componentDidMount(){
        this.init();
    }

    async init(){
        //videoListDataUrl
        const {section}=this.props.params;
        const { fetchData } = this.props;
        await fetchData(videoListDataUrl,section);
    }

    render(){
        const { section } = this.props.params;
        const { videoList } = this.props;
        return(
            <div className="video-list">
                <SimpleTopBar title={this.num[section]} goBack={()=>{hashHistory.push(`/look-party`)}} />
                <Studies videoList ={videoList}/>
            </div>
        )
    }
}

VideoList = connect(
    (state,ownProps) => ({
        videoList: state.videoList['videoList_'+ ownProps.params.section].videos
    }),
    {
        fetchData
    }
)(VideoList);

export default VideoList