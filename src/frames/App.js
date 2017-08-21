import React, { Component } from 'react'

import MainWrapper from './MainWrapper'
import Alert from '../singletons/Alert'

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <MainWrapper>
                    {this.props.children}
                </MainWrapper>
                <Alert />
            </div>
        );
    }

}

export default App