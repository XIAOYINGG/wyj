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
                                <p className="comment-name">{}</p>
                                <p className="comment-content">{}</p>
                                <div className="comment-bottom">
                                    <span className="comment-time">{}</span>
                                    <div className="zan">
                                        <img src=""/>
                                        <span>{}</span>
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
        comments:state.liveDetail.details.comments
    }),
)(Comments);

export default Comments;
