import React, { Component } from 'react'
import { Link,browserHistory } from 'react-router'
import { picPathHead } from "../conf/conf"

import './MainWrapper.scss'

class BottomBarItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { title, imgSrc, to } = this.props;
        const imgSrcEnd = browserHistory.getCurrentLocation().hash.indexOf(to)>-1?`Active`:"";
        return (
            <div className="bottom-bar-item">
                <Link
                    to={to}
                    activeClassName="active"
                >
                    <img src={imgSrc+imgSrcEnd+window.imgSuffix+'.png'} alt=""/>
                    <br/>
                    <span>{title}</span>
                </Link>
            </div>
        );
    }

}

class BottomBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bottom-bar">
                <BottomBarItem title="向你看" imgSrc = {picPathHead+`images/frames/lookParty`} to="/look-party" />
                <BottomBarItem title="学你课" imgSrc = {picPathHead+"images/frames/learnParty"} to="/learn-party"/>
                <BottomBarItem title="听你讲" imgSrc = {picPathHead+"images/frames/listenParty"} to="/listen-party"/>
                <BottomBarItem title="跟你走" imgSrc = {picPathHead+"images/frames/followParty"} to="/follow-party"/>
            </div>
        );
    }

}

class MainWrapper extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="main-wrapper">
                {children}
                <BottomBar />
            </div>
        );
    }

}

export default MainWrapper