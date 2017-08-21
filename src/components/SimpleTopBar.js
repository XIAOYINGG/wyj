import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { picPathHead } from "../conf/conf"

import './SimpleTopBar.scss'

class SimpleTopBar extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        const { goBack } = this.props;
        if (typeof goBack === 'function') {
            goBack();
        } else {
            hashHistory.goBack();
        }
    }

    render() {
        const { title, btn } = this.props;
        // style={{backgroundImage: `url(${picPathHead}images/frames/navigation${window.imgSuffix}.png)`}}
        return (
            <div className="simple-top-bar">
                <a className="back" onClick={this.goBack}>
                    <img src={picPathHead+`images/videoList/back${window.imgSuffix}.png`} alt="" className="backImg"/>
                </a>
                <div className="title">
                    {title}
                </div>
                {
                    btn ? (
                        <a
                            className="btn"
                            onClick={btn.onClick}
                        >
                            {btn.text}
                        </a>
                    ) : null
                }
            </div>
        );
    }

}

const defaultProps = {
    title: ''
};

SimpleTopBar.defaultProps = defaultProps;

export default SimpleTopBar