import React, { Component } from 'react'

import Loader from '../components/Loader'

import './MainTopBar.scss'

import { picPathHead } from "../conf/conf"

class MainTopBar extends Component {

    constructor(props) {
        super(props);
    }

    goBack() {
        history.back();
    }

    render() {

        const { loader, stateId, loaderDelay, title, goBack } = this.props;
        const loading = loader.show && loader.ids[stateId];
        // style={{backgroundImage: `url(${picPathHead}images/frames/navigation${window.imgSuffix}.png)`}}
        return (
            <div className="main-top-bar" >
                {
                    goBack ? (
                        <a className="back" onClick={this.goBack}>
                            <img src={picPathHead+"images/videoList/back.png"} alt="" className="backImg"/>
                        </a>
                    ) : null
                }
                <div className="title">
                    {title}
                </div>
                {
                    loading ? (
                        <Loader
                            style={{
                                position: 'absolute',
                                top: '0.347rem',
                                right: '0.347rem'
                            }}
                            delay={loaderDelay}
                        />
                    ) : null
                }
            </div>
        );
    }

}

const defaultProps = {
    loading: false
};

MainTopBar.defaultProps = defaultProps;

export default MainTopBar