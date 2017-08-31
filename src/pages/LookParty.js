import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Swiper from 'swiper'

import { showAlert } from '../actions/singleton/alert'
import { showLoader, hideLoader } from '../actions/singleton/loader'
import Alert from '../singletons/Alert'
import StatefulMainTopBar from '../containers/StatefulMainTopBar'

import fetchData from '../actions/lookParty/fetchData'
import { lookPartyDataUrl } from '../urls/index'
import { picPathHead } from "../conf/conf"

import './LookParty.scss'

class LookParty extends Component {

    constructor(props) {
        super(props);
        this.init = this.init.bind(this);
        this.test = this.test.bind(this);
    }

    componentDidMount() {
        this.init();
    }

    async init() {
        const { fetchData, showLoader, hideLoader } = this.props;
        showLoader('look-party');
        var result = await fetchData(lookPartyDataUrl);
        hideLoader('look-party');
        this.swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
        });
    }

    async test() {
        const result = await this.props.showAlert({
            bindResolve: Alert.bindResolve
        });
    }

    render() {
        const { slides } = this.props;
        return (
            <div className="look-party">
                <StatefulMainTopBar stateId="look-party" loaderDelay title="向你看"/>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            slides.map((s, i) => (
                                <a
                                    key={`slide-${i}`}
                                    className="swiper-slide"
                                    style={{
                                        backgroundImage: `url(${s.img+window.imgSuffix+".png"})`,
                                        backgroundSize: 'cover'
                                    }}
                                />
                            ))
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="sections">
                    <Link className="section" to="/videos/10">
                        <img src={picPathHead+`images/lookParty/d${window.imgSuffix}.png`} alt=""/>
                        <span>我们是你</span>
                    </Link>
                    <Link className="section" to="/videos/11">
                        <img src={picPathHead+`images/lookParty/e${window.imgSuffix}.png`} alt=""/>
                        <span>动态</span>
                    </Link>
                    <Link className="section" to="/videos/12">
                        <img src={picPathHead+`images/lookParty/f${window.imgSuffix}.png`} alt=""/>
                        <span>词条</span>
                    </Link>
                    <Link className="section" to="/videos/13">
                        <img src={picPathHead+`images/lookParty/g${window.imgSuffix}.png`} alt=""/>
                        <span>记忆</span>
                        {/*<span style={{margin:"0"}}>的本钱</span>*/}
                    </Link>
                    <Link className="section" to="videos/14">
                        <img src={picPathHead+`images/lookParty/h${window.imgSuffix}.png`} alt=""/>
                        <span style={{color:"#C7C7C7"}}>人生</span>
                    </Link>
                    <Link className="section" to="videos/15" >
                        <img src={picPathHead+`images/lookParty/i${window.imgSuffix}.png`} alt=""/>
                        <span style={{color:"#C7C7C7"}}>用典</span>
                    </Link>
                </div>
                {
                    /*<button onClick={this.test}>test</button>*/
                }
            </div>
        );
    }

}

LookParty = connect(
    state => ({
        slides: state.lookParty.slides
    }),
    {
        showAlert,
        fetchData,
        showLoader,
        hideLoader
    }
)(LookParty);

export default LookParty