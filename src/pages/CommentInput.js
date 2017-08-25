/**
 * Created by KING on 2017/8/25.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="comment-input">
                <input type="text" placeholder="输入心得"/>
                    <a href="javascript:void(0)">发送</a>
            </div>
        )
    }
}

CommentInput = connect(
    state => ({
    }),
)(CommentInput);

export default CommentInput;