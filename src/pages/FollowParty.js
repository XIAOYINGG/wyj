/**
 * Created by KING on 2017/8/22.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import { showLoader, hideLoader } from '../actions/singleton/loader'
import fetchData from '../actions/followParty/fetchData'
import StatefulMainTopBar from '../containers/StatefulMainTopBar'
import { picPathHead } from "../conf/conf"
import './FollowParty.scss'
import ConcreteInfo from "./ConcreteInfo"



class FollowParty extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {messages}=this.props;
        return(
            <div className="follow-party">
                <StatefulMainTopBar stateId="follow-party" loaderDelay title="跟你走" />
                <div className="Item">
                    <ItemTop title="党支部信息"/>
                    <div className="item-info">
                        <p>{messages.branchName}</p>
                        <div className="concrete">
                            <ConcreteInfo itemTitle="会议" imgSrc={picPathHead+`/images/followParty/meet${window.imgSuffix}.png`} alt=""/>
                            <ConcreteInfo itemTitle="优秀心得" imgSrc={picPathHead+`/images/followParty/thoughts${window.imgSuffix}.png`} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Item">
                    <ItemTop title="个人信息"/>
                    <div className="item-info">
                        <div className="person">
                            <p className="person-name">{messages.personName}</p>
                            <p className="person-phone">{messages.telephone}</p>
                            <img src={messages.img}/>
                        </div>
                        <div className="concrete">
                            <ConcreteInfo itemTitle="学习轨迹" imgSrc={picPathHead+`/images/followParty/track ${window.imgSuffix}.png`} alt=""/>
                            <ConcreteInfo itemTitle="我的心得" imgSrc={picPathHead+`/images/followParty/my-exp${window.imgSuffix}.png`} alt=""/>
                            <ConcreteInfo itemTitle="消息通知" imgSrc={picPathHead+`/images/followParty/inform${window.imgSuffix}.png`} alt=""/>
                        </div>
                    </div>

                </div>
                <div className="Item">
                    <ItemTop title="设置"/>
                    <div className="">
                       <Settings title="意见反馈" imgSrc={picPathHead+`/images/followParty/gt${window.imgSuffix}.png`} alt=""/>
                        <Settings title="关于我们" imgSrc={picPathHead+`/images/followParty/gt${window.imgSuffix}.png`} alt=""/>
                        <Settings title="清理缓存" imgSrc={picPathHead+`/images/followParty/gt${window.imgSuffix}.png`} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

class Settings extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {title,imgSrc}=this.props;
        return(
            <div className="set-detail">
                <p>{title}</p>
                <img src={imgSrc}/>
            </div>
        )
    }
}

class ItemTop extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {title}=this.props;
        return(
            <div className="item-top">
                <p>{title}</p>
            </div>
        )
    }
}

FollowParty = connect(
    state=>({
            messages:state.followParty.messages
        }),
    {
        fetchData,
        showLoader,
        hideLoader
    }
)(FollowParty);

export default FollowParty;