/**
 * Created by KING on 2017/8/17.
 */
import React, { Component } from 'react'
import { connect } from "react-redux"
import StatefulMainTopBar from '../containers/StatefulMainTopBar'
import {learnPartyDataUrl} from '../urls/index'
import Studies from "./Studies"
import fetchData from '../actions/learnParty/fetchData'
import './learnParty.scss'
//import fetchData from '../actions/videoList/fetchData'
//import {videoListDataUrl} from '../urls/index'



class LearnParty extends Component{
    constructor(props){
        super(props);
        this.init = this.init.bind(this);
    }
    componentDidMount(){
        this.init();
    }
    async init(){
        const { fetchData } = this.props;
        //showLoader("learn-party");
       // await fetchData(videoListDataUrl,15);
        await fetchData(learnPartyDataUrl);
       // hideLoader("learn-party")
    }

    render(){
        const { learnList } = this.props;
        return(
            <div className="learn-party">
                <StatefulMainTopBar stateId="learn-party" loaderDelay title="学你课"/>
                <Studies videoList={learnList}/>
            </div>

        );
    }
}
LearnParty = connect(
    state =>({
        learnList:state.learnParty.learnList
    }),
    /*(state,ownProps) => ({
        videoList: state.videoList['videoList_15'].videos
    }),*/
    {
        fetchData,
       /* showLoader,
        hideLoader*/
    }
)(LearnParty);

export default LearnParty
