/**
 * Created by KING on 2017/8/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { picPathHead } from "../conf/conf"
import './studies.scss'
import { Link, hashHistory } from "react-router"


class Studies extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const { learnList } = this.props;
        return(
            <div className="studies">
                {
                    learnList.map((l,i) => {
                        return(
                            <Link to={"/video/"+l.videoId} key={`video-${i}`} >
                            <div className="item">
                                <div className="learnDes">
                                    <p>{l.title}</p>
                                    <div className="learnInfo">
                                            {
                                                (() => {
                                                switch (l.category) {
                                                    case "提高":
                                                        return <div className="level1"><p className="up">{l.category}</p></div>

                                                    case "基础":
                                                        return <div className="level2">
                                                            <p className="down">{l.category}</p>
                                                        </div>
                                                    case "研究":
                                                        return <div className="level3">
                                                            <p className="middle">{l.category}</p>
                                                        </div>
                                                    default:
                                                        return  <div className="level2">
                                                            <p className="down">{l.category}</p>
                                                        </div>;
                                                }
                                            })()}

                                        <div className="date">
                                            <p>{l.time}</p>
                                        </div>
                                        <div className="focus">
                                            <img src={picPathHead+`/images/learnParty/see${window.imgSuffix}.png`} alt=""/>
                                            <span>{l.count}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="learnImg">
                                    <img src={l.img} className="video-img"/>
                                    <div className="video-state">
                                        <img src={picPathHead+`/images/learnParty/play${window.imgSuffix}.png`} alt="" className="learnPlay"/>
                                        <span>{l.long}</span>
                                    </div>

                                </div>
                            </div>
                            </Link>
                    )
                }
                    )
                }
            </div>
        );
    }
}

Studies = connect(
    state => ({
    }),
)(Studies);

export default Studies