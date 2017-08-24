/**
 * Created by KING on 2017/8/17.
 */
import React, { Component } from 'react'
import { connect } from "react-redux"
import { showLoader, hideLoader } from '../actions/singleton/loader'
import StatefulMainTopBar from '../containers/StatefulMainTopBar'
import { learnPartyDataUrl } from '../urls/index'
import Studies from "./Studies"
import fetchData from '../actions/learnParty/fetchData'
import './learnParty.scss'


class LearnParty extends Component{
    constructor(props){
        super(props);
        this.init = this.init.bind(this);
        //this.test = this.test.bind(this);
    }
    componentDidMount(){
        this.init();
    }
    async init(){
        const { fetchData, showLoader, hideLoader } = this.props;
        showLoader("learn-party");
        await fetchData(learnPartyDataUrl);
        hideLoader("learn-party")
    }

    render(){
        const { learnList } = this.props;
        return(
            <div className="learn-party">
                <StatefulMainTopBar stateId="learn-party" loaderDelay title="学你课"/>
                <Studies learnList={learnList}/>
            </div>

        );
    }
}
LearnParty = connect(
    state =>({
        learnList:state.learnParty.learnList
    }),
    {
        fetchData,
        showLoader,
        hideLoader
    }
)(LearnParty);

export default LearnParty
