/**
 * Created by KING on 2017/8/24.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { picPathHead } from "../conf/conf"

class Comments extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { comments }=this.props;
        return(
            <div className="comments">
                {
                    comments.map((c,i)=>{
                        return(
                            <div className="">
                                <p className="comment-name">{c.name}</p>
                                <p className="comment-content">{c.content}</p>
                                <div className="comment-bottom">
                                    <span className="comment-time">{c.commentTime}</span>
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
)(Comments);

export default Comments;
