/**
 * Created by KING on 2017/8/24.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { picPathHead } from "../conf/conf"
import { commentsDataUrl } from '../urls/index'
import fetchData from '../actions/comments/fetchData'
import { showLoader, hideLoader } from '../actions/singleton/loader'

class Comments extends Component{
    constructor(props){
        super(props);
    }
    /*componentDidMount(){
        const { fetchData } = this.props;
        fetchData(commentsDataUrl);
    }*/
    render(){
        const { comments }=this.props;
        return(
            <div className="comments">
                {
                    comments.map((c,i)=>{
                        return(
                            <div className="comment-item" key={`liveDetail-${i}`}>
                                <p className="comment-name">{c.name}</p>
                                <p className="comment-content">{c.content}</p>
                                <div className="comment-bottom">
                                    <p className="comment-time">{c.commentTime}</p>
                                    <div className="zan">
                                        <img src={picPathHead+`/images/liveDetail/zan${window.imgSuffix}.png`} alt=""/>
                                        <span>{c.num}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

Comments = connect(
    state => ({

    }),
    /*{
        fetchData,
        showLoader,
        hideLoader
    }*/
)(Comments);

export default Comments;
