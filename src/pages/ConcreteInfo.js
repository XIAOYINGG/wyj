/**
 * Created by KING on 2017/8/22.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ConcreteInfo.scss'

class ConcreteInfo extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {itemTitle,imgSrc}=this.props;
        return(
            <a className="concrete-item">
                <img src={imgSrc}/>
                <span>{itemTitle}</span>
            </a>
        )
    }
}

ConcreteInfo = connect(
    state => ({
    }),
)(ConcreteInfo);

export default ConcreteInfo