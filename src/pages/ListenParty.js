import React, { Component } from 'react'
import { connect } from "react-redux"
import  { hashHistory }  from 'react-router'
import Lives from "./Lives"

import StatefulMainTopBar from '../containers/StatefulMainTopBar'
import { showLoader, hideLoader } from '../actions/singleton/loader'

import { fetchData, saveLiveData } from '../actions/listenParty/fetchData'

import { listenPartyDataUrl } from '../urls/index'

import "./ListenParty.scss"

class ListenParty extends Component {

    constructor(props) {
        super(props);
        this.init = this.init.bind(this);
    }
    componentDidMount(){
        this.init();
    }
    async init(){
        const { fetchData, showLoader, hideLoader } = this.props;
        showLoader("listen-party");
        await fetchData(listenPartyDataUrl);
        hideLoader("listen-party")
    }
    render() {
        const { liveList} = this.props;
        return (
            <div className="listen-party">
                <StatefulMainTopBar stateId="listen-party" loaderDelay title="听你讲"/>
                <Lives liveList = {liveList} live="follow"/>
            </div>
        );
    }

}

ListenParty = connect(
    state => ({
        liveList: state.listenParty.liveList_listen.liveList
    }),
    {
        fetchData,
        saveLiveData,
        showLoader,
        hideLoader
    }
)(ListenParty);

export default ListenParty