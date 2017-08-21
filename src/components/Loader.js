import React, { Component } from 'react'

import './Loader.scss'

class Loader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    componentDidMount() {
        if(this.props.delay) {
            this.setState({ show: false });
            this.timer = setTimeout(() => {
                this.setState({ show: true });
            }, 600);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { style } = this.props;
        return (
            <div
                className={`loader${this.state.show ? '' : ' hide'}`}
                style={style}
            ></div>
        );
    }

}

const defaultProps = {
    delay: false
};

Loader.defaultProps = defaultProps;

export default Loader