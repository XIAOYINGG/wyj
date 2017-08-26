import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, hashHistory } from "react-router"

import { saveLiveData } from '../actions/listenParty/fetchData'
import { picPathHead } from "../conf/conf"
import './lives.scss'

class Lives extends Component {

    constructor(props) {
        super(props);
    }
    enterLive(liveId,visited,isOver,title){
        // const { live } = this.props;
        // if(visited){
        //     hashHistory.push({pathname:"/live/"+liveId,query:{isOver:isOver,live:live}})
        // }
        // else{
        //     const { saveLiveData } = this.props;
        //     saveLiveData(title);
        //     hashHistory.push({pathname:"/live/code",query:{liveId:liveId,isOver:isOver,live:live}})
        // }
    }
    render() {
        const { liveList } = this.props;
        return (
            <div className="lives">
                {
                    liveList.map((l,i) => {
                            const srcUrl = l.isOver?`end${window.imgSuffix}.png`:`live${window.imgSuffix}.png`;
                            return(
                                /*<a href="javascript:void(0)" key={`live-${i}`} onClick={this.enterLive.bind(this,l.liveId,l.visited,l.isOver,l.title)}>*/
                                <Link to={"/live/"+l.liveId}key={`live-${i}`} onClick={this.enterLive.bind(this,l.liveId,l.visited,l.isOver,l.title)}>
                                    <div className="item">
                                        <div className="liveImage">
                                            <img src={l.img} alt="" className="liveLogo"/>
                                            <img src={picPathHead+`/images/listenParty/start${window.imgSuffix}.png`} alt="" className="playImg"/>
                                        </div>
                                        <div className="liveDes">
                                            <p>{l.title}</p>
                                            <div className="liveInfo">
                                                <img src={picPathHead+"/images/listenParty/"+srcUrl} alt="" className="liveState"/>
                                                <div className="time">
                                                    <img src={picPathHead+`/images/listenParty/time${window.imgSuffix}.png`} alt=""/>
                                                    <span>{l.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                    /*</a>*/
                            )
                        }
                    )
                }
            </div>
        );
    }

}

Lives = connect(
    state => ({
    }),
    {saveLiveData}
)(Lives);

export default Lives