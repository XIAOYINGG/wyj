import React, { Component } from 'react'
import { connect } from 'react-redux'

import { hideAlert } from '../actions/singleton/alert'

import './Alert.scss'

class Alert extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    static bindResolve(resolve) {
        Alert.resolve = resolve.bind(null, {
            status: 'ok',
            value: undefined
        });
    }

    handleClick() {
        this.props.hideAlert();
        const resolve = Alert.resolve;
        resolve && resolve();
    }

    render() {
        const {
            title,
            btnText,
            show
        } = this.props;
        const style = show ? { display: 'block' } : { display: 'none' };
        return (
            <div className="alert" style={style}>
                <div className="modal-mask">
                    <div className="container">
                        <div className="wrapper">
                            <div className="title">
                                {title}
                            </div>
                            <a className="btn" onClick={this.handleClick}>
                                {btnText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Alert = connect(
    state => ({
        show: state.singleton.alert.show,
        title: state.singleton.alert.title,
        btnText: state.singleton.alert.btnText
    }),
    {
        hideAlert
    }
)(Alert);

export default Alert