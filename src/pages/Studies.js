/**
 * Created by KING on 2017/8/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { picPathHead } from "../conf/conf"
import './studies.scss'


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
                            <div className="item">
                                <div className="learnDes">
                                    <p>{l.title}</p>
                                    <div className="learnInfo">
                                        <div className="level">
                                            <p>{l.category}</p>
                                        </div>
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
                                        <span>{}</span>
                                    </div>

                                </div>
                            </div>
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